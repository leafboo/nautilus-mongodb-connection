import { Link } from "react-router"
import UserHomeCSS from "./UserHome.module.css"
import WorkspaceListRow from "../components/WorkspaceListRow"

export default function UserHome() {
  return (
    <>
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