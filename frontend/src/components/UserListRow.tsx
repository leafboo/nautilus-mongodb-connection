import UserListRowCSS from "./UserListRow.module.css"
import { Link } from "react-router"

type UserListRowProps = {
  id: string;
  user: string;
}

export default function UserListRow(props: UserListRowProps) {
  return ( 
    <>
      <Link to={`/userHome/${props.id}`} style={{ textDecoration: 'none' }} >
        <div className={UserListRowCSS['user-row']}>
          {props.user}
        </div>
      </Link>
      
    </>
  )
}