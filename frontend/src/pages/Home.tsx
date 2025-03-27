import React from "react"
import HomeCSS from "./Home.module.css"
import UserListRow from "../components/UserListRow"
import { Link } from "react-router"
import NautilusApi from "../../api/index"

type UserType = {
  _id: string;
  username: string;
  password: string;
  email: string;
  workspace_ids: string[];
  __v: number
}

export default function Home() {
  const [users, setUsers] = React.useState<UserType[]>([]);
  let usersElement
  if (users) {
    users.forEach((user) => console.log(user.username))

    usersElement = users.map(user => <UserListRow id={user._id} user={user.username} />) 

  }

  React.useEffect(() => {
    getUsers()
  }, [])

  async function getUsers() {
    const userData = await NautilusApi.fetchUsers();
    setUsers(userData)
  }

  return (
    <>
      <div className={HomeCSS['home-container']}>
        <div className={HomeCSS['home-box']}>
          <div className={HomeCSS['create-button']}>
            <Link to="./createUser">
              <button>
                Create User
              </button>
            </Link>
          </div>
          

          <div className={HomeCSS['user-list']}>
            {usersElement}
          </div>
        </div>
      </div>
    </>
  )
}