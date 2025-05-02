import WorkspaceListRowCSS from "./WorkspaceListRow.module.css"
import { Link } from "react-router"

type WorkspaceListRowProps = {
  name: string;
}

export default function WorkspaceListRow(props: WorkspaceListRowProps) {
  return ( 
    <>
      <Link to="/userHome/workspace" style={{ textDecoration: 'none' }} state={{name: props.name}} >
        <div className={WorkspaceListRowCSS['workspace-row']}>
          <span> {props.name} </span>
        </div>
        
      </Link>
    </>
  )
}