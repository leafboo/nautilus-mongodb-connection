import { useParams, useNavigate } from "react-router"
import CreateWorkspaceCSS from "./CreateWorkspace.module.css"
import { z } from "zod"
import NautilusApi from "../../api"


const workspaceSchema = z.object({
  workspaceName: z.string()
})


export default function CreateWorkspace() {
  const navigate = useNavigate();
  const { id } = useParams();

  
  function formAction(formData: FormData) {
      const formValues = Object.fromEntries(formData);
  
      const result = workspaceSchema.safeParse(formValues)
    
      
      if (result.success && id) {
        NautilusApi.createUserWorkspace(id, result.data.workspaceName)
        navigate(`/userHome/${id}`)
      } else {
        alert("IDK but something went wrong")
      }
      
  
  
    
    }
    
  return (
    <>
      <div className={CreateWorkspaceCSS['create-workspace-container']}>
        <div className={CreateWorkspaceCSS['create-workspace-box']}>
          <div className={CreateWorkspaceCSS['title']}>Choose one</div><br />
          <div className={CreateWorkspaceCSS['buttons']}>
          </div> <br />

          <form action={formAction}>
            <label htmlFor="workspaceName" >Workspace Name</label><br />
            <input id="workspaceName" name="workspaceName" type="text" placeholder="Enter workspace name" /><br /><br />

            
            
            <input type="submit" value="Create workspace"/>
            
          

          </form>
        </div>
       
      </div>
    </>
  )
}