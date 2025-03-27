import HomeCSS from "./Home.module.css"
import UserListRow from "../components/UserListRow"
import { Link } from "react-router"



export default function Home() {
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
            <UserListRow user={1} />
            <UserListRow user={2} />
            <UserListRow user={3} />
            <UserListRow user={4} />
          </div>
        </div>
      </div>
    </>
  )
}