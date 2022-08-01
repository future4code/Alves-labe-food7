import React from "react";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import {registerUser} from "../../services/profile"


const SignUpForm = () => {
  const { form, handleInputChange, clear } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const navigate = useNavigate();

  const onSubmitSignUp = (event) => {
    event.preventDefault();
    registerUser(form, clear, navigate)
  };
  
    

  return (   
      <form onSubmit={onSubmitSignUp}>
        <input
          name="username"
          placeholder="Nome de usuário"
          type="text"
          value={form.name}
          onChange={handleInputChange}
          required
        />
        <input
          name="email"
          placeholder="E-mail"
          type="email"
          value={form.email}
          onChange={handleInputChange}
          required
        />
        <input
          name="cpf"
          placeholder="E-mail"
          type="cpf"
          value={form.cpf}
          onChange={handleInputChange}
          required
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          value={form.password}
          onChange={handleInputChange}
          required
          pattern={"^.{6,}"}
          title={"Senha deve ter no mínimo 6 caracteres"}
        />       
        <button>criar</button>
      </form>    
  );
};
export default SignUpForm;
