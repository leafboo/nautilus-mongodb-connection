import WorkspaceListRowCSS from "./WorkspaceListRow.module.css"
import { Link } from "react-router"

type WorkspaceListRowProps = {
  name: string;
  type: string;
}

export default function WorkspaceListRow(props: WorkspaceListRowProps) {
  return ( 
    <>
      <Link to="/userHome/workspace" style={{ textDecoration: 'none' }} state={{name: props.name, type: props.type}} >
        <div className={WorkspaceListRowCSS['workspace-row']}>
          <span> {props.name} </span>
          <div>
            Type: {props.type}
          </div>
        </div>
        
      </Link>
    </>
  )
}