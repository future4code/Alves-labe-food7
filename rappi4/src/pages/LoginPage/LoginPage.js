import React from "react";
import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import { login } from "../../services/user";
import { Form } from "./styled";

const LoginPage = () => {
  const { form, onChange, clear } = useForm({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onSubmitSignUp = (event) => {
    event.preventDefault();
    login(form, clear, navigate);
  };

  return (
    <div>
      {" "}
      LoginPage
      <Form onSubmit={onSubmitSignUp}>
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
      </Form>
    </div>
  );
};

export default LoginPage;
