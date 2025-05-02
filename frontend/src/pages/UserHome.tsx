import React from "react";
import { Link, useParams } from "react-router"
import UserHomeCSS from "./UserHome.module.css"
import WorkspaceListRow from "../components/WorkspaceListRow"
import NautilusApi from "../../api";
type WorkspaceType = {
  _id: string;
  workspaceName: string;
  notebook: string[];
  researchPapers: [];
  newsArticles: [];
}

type UserType = {
  _id: string;
  username: string;
  password: string;
  email: string;
  workspaces: WorkspaceType[];
  __v: number
}



export default function UserHome() {  
  const { id } = useParams();
  const [user, setUser] = React.useState<UserType>();
  let workspaceElement

  React.useEffect(() => {
    getUser();
  }, [])

  async function getUser() {
    if (id) {
      const userData = await NautilusApi.fetchUser(id)
      setUser(userData);
    }
  }
  
 if (user && user.workspaces.length > 0) {
  workspaceElement = user?.workspaces.map(workspace => <WorkspaceListRow name={workspace.workspaceName} />)
 }

  return (
    <>
      <div>User: {user?.username}</div>
      <div className={UserHomeCSS['user-home-container']}>
        <div className={UserHomeCSS['user-home-box']}>
          <div className={UserHomeCSS['create-workspace-button']}>
            <Link to={`/userHome/${user?._id}/createWorkspace`} >
              <button>
                Create Workspace
              </button>
            </Link>
          </div>
        

          <div className={UserHomeCSS['workspace-list']}>
            {workspaceElement}
          </div>
        </div>
      </div>
    </>
  )
}