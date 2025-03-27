import { Link } from "react-router"
import CreateWorkspaceCSS from "./CreateWorkspace.module.css"

export default function CreateWorkspace() {
  return (
    <>
      <div className={CreateWorkspaceCSS['create-workspace-container']}>
        <div className={CreateWorkspaceCSS['create-workspace-box']}>
          <div className={CreateWorkspaceCSS['title']}>Choose one</div><br />
          <div className={CreateWorkspaceCSS['buttons']}>
            <button>News Articles</button>
            <button>Research Papers</button>
          </div> <br />

          <form method="post">
            
            <input type="text" placeholder="Enter workspace name" />
            <Link to="/userHome/">
              <input type="submit" value="Create workspace"/>
            </Link>
          

          </form>
        </div>
       
      </div>
    </>
  )
}