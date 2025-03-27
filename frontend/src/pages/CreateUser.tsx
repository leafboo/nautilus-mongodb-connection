import { Link } from "react-router"

export default function CreateUser() {
  return ( 
    <>
      <form method="post">
        <label htmlFor="username">Username</label><br />
        <input id="username" type="text" /><br />

        <label htmlFor="email">Email</label><br />
        <input id="email" type="text" /><br />

        <label htmlFor="password">Password</label><br />
        <input id="password" type="text" /><br />

        <label htmlFor="reEnterPassword">Re-Enter Password</label><br />
        <input id="reEnterPassword" type="text" /><br /><br />

        <Link to="/">
          <input type="submit" value="Create Account" />
        </Link>
      </form>
    </>
  )
}