import React from "react";
import { Link, useParams } from "react-router"
import UserHomeCSS from "./UserHome.module.css"
import WorkspaceListRow from "../components/WorkspaceListRow"
import NautilusApi from "../../api";

type UserType = {
  _id: string;
  username: string;
  password: string;
  email: string;
  workspaces: [];
  __v: number
}

export default function UserHome() {  
  const { id } = useParams();
  const [user, setUser] = React.useState<UserType>();

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
  user?.workspaces.forEach(workspace => console.log(workspace));
  //user.workspaceIds.map(workspaceId => <WorkspaceListRow />) WORK ON THIS
 }

  return (
    <>
      <div>User: {user?.username}</div>
      <div className={UserHomeCSS['user-home-container']}>
        <div className={UserHomeCSS['user-home-box']}>
          <div className={UserHomeCSS['create-workspace-button']}>
            <Link to="/userHome/createWorkspace" >
              <button>
                Create Workspace
              </button>
            </Link>
          </div>
        

          <div className={UserHomeCSS['workspace-list']}>
            <WorkspaceListRow workspace={1}
                              type="Research Paper" />
            <WorkspaceListRow workspace={2}
                              type="News Article" />
            <WorkspaceListRow workspace={3}
                              type="Research Paper" />
            <WorkspaceListRow workspace={4}
                              type="Research Paper" />
          
          </div>
        </div>
      </div>
    </>
  )
}