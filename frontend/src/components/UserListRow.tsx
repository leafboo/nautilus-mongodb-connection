import UserListRowCSS from "./UserListRow.module.css"
import { Link } from "react-router"

type UserListRowProps = {
  user: number
}

export default function UserListRow(props: UserListRowProps) {
  return ( 
    <>
      <Link to="/userHome" style={{ textDecoration: 'none' }} >
        <div className={UserListRowCSS['user-row']}>
          User {props.user}
        </div>
      </Link>
      
    </>
  )
}