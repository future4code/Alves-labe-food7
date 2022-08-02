import React from "react"
import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import { login } from "../../services/user";


const LoginPage = () => {
   const { form, onChange, clear } = useForm({
      email: "",
      password: "",
    })

    const navigate = useNavigate()

    const onSubmitSignUp = (event) => {
      event.preventDefault();
      login(form, clear, navigate);
    };
  

   return(
   
   
   <div> LoginPage
      
      <form onSubmit={onSubmitSignUp}>
     
      <input
        name="email"
        placeholder="E-mail"
        type="email"
        value={form.email}
        onChange={onChange}
        required
      />

       <input
        name="password"
        placeholder="password"
        type="password"
        value={form.password}
        onChange={onChange}
        required
      />
       <button>criar</button>
      </form>
           
       </div>)
   
}

export default LoginPage