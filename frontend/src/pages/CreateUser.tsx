import { z } from "zod"
import { useNavigate } from "react-router";
import NautilusApi from "../../api";

const userSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
  reEnterPassword: z.string()
})


export default function CreateUser() {
  const navigate = useNavigate();
  

  
  function formAction(formData: FormData) {
    const formValues = Object.fromEntries(formData);

    const result = userSchema.safeParse(formValues)
    
    if (result.success && result.data.password === result.data.reEnterPassword) {
      NautilusApi.createUser(result.data.username, result.data.email, result.data.password);
      navigate("/")

    } else if (result.success && result.data.password !== result.data.reEnterPassword) {
      alert("Passwords do not match")
    }


    console.log(result)
  }

  return ( 
    <>
      <form action={formAction}>
        <label htmlFor="username">Username</label><br />
        <input id="username" name="username" type="text" required /><br />

        <label htmlFor="email">Email</label><br />
        <input id="email" name="email" type="text" required /><br />

        <label htmlFor="password">Password</label><br />
        <input id="password" name="password" type="password" required /><br />

        <label htmlFor="reEnterPassword">Re-Enter Password</label><br />
        <input id="reEnterPassword" name="reEnterPassword" type="password" required /><br /><br />

       
        <input type="submit" value="Create Account" />
        
          
        
      </form>
    </>
  )
}