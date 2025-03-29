import Home from "./pages/Home"
import CreateUser from "./pages/CreateUser"
import UserHome from "./pages/UserHome"
import Workspace from "./pages/Workspace"
import CreateWorkspace from "./pages/CreateWorkspace"
import { Routes, Route } from "react-router"

export default function App() {
 
  return (
    <>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/userHome/:id" element={<UserHome />} />
        <Route path="/userHome/:id/createWorkspace" element={<CreateWorkspace />} />
        <Route path="/userHome/workspace" element={<Workspace />} />
      




      </Routes>
    </>
  )
}

