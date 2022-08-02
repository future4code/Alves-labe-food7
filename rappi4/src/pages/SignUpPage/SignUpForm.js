import React from "react";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/profile";


const SignUpForm = () => {
  const { form, onChange, clear } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const navigate = useNavigate();

  const onSubmitSignUp = (event) => {
    event.preventDefault();
    registerUser(form, clear, navigate);
  };

  return (
    <form onSubmit={onSubmitSignUp}>
      <input
        name="name"
        placeholder="Nome de usuário"
        type="text"
        value={form.name}
        onChange={onChange}
        required
      />
      <input
        name="email"
        placeholder="E-mail"
        type="email"
        value={form.email}
        onChange={onChange}
        required
      />
      <input
        name="cpf"
        placeholder="cpf"
        pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
        title={"000.000.000-00"}
        type="cpf"
        value={form.cpf}
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
        pattern={"^.{6,}"}
        title={"Senha deve ter no mínimo 6 caracteres"}
      />
      <button>criar</button>
    </form>
  );
};
export default SignUpForm;
