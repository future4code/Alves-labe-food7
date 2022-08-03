import React from "react";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/profile";
import { Button, Input, Form, Fieldset } from "./styled";

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
    <Form onSubmit={onSubmitSignUp}>
      <Fieldset>
        <legend>Nome*</legend>
        <input
          name="name"
          placeholder="Nome e sobrenome"
          type="text"
          value={form.name}
          onChange={onChange}
          required
        />
      </Fieldset>

      <Fieldset>
        <legend>E-mail*</legend>
        <input
          name="email"
          placeholder="email@email.com"
          type="email"
          value={form.email}
          onChange={onChange}
          required
        />
      </Fieldset>

      <Fieldset>
        <legend>CPF*</legend>
        <input
          name="cpf"
          placeholder="000.000.000-00"
          pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
          title={"000.000.000-00"}
          type="cpf"
          value={form.cpf}
          onChange={onChange}
          required
        />
      </Fieldset>

      <Fieldset>
        <legend>Senha*</legend>
        <input
          name="password"
          placeholder="Mínimo 6 caracteres"
          type="password"
          value={form.password}
          onChange={onChange}
          required
          pattern={"^.{6,}"}
          title={"Senha deve ter no mínimo 6 caracteres"}
        />
      </Fieldset>
      <Fieldset>
        <legend>Confirme sua Senha*</legend>
        <input
          name="password"
          placeholder="Mínimo 6 caracteres"
          type="password"
          value={form.password}
          onChange={onChange}
          required
          pattern={"^.{6,}"}
          title={"Senha deve ter no mínimo 6 caracteres"}
        />
      </Fieldset>

      <Button>Criar</Button>
    </Form>
  );
};
export default SignUpForm;
