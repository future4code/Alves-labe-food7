import React from "react";
import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import { login } from "../../services/user";
import {
  Button,
  Form,
  Fieldset,
  ScreenContainer,
  LogoContainer,
  Text,
} from "./styled";
import Header from "../../components/Header";
import logo from "../../assets/logo.svg";
import { goToSignUp } from "../../routes/cordinator";

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
    <ScreenContainer>
      <Header />
      <LogoContainer>
        <img src={logo} />
      </LogoContainer>
      <Text>
        <p>Entrar</p>
      </Text>
      <Form onSubmit={onSubmitSignUp}>
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
          <legend>Senha*</legend>
          <input
            name="password"
            placeholder="Mínimo 6 caracteres"
            type="password"
            value={form.password}
            onChange={onChange}
            required
          />
        </Fieldset>

        <Button>Entrar</Button>
      </Form>
      <Text>
        <p onClick={() => goToSignUp(navigate)}>
          Não possui cadastro? Clique aqui.
        </p>
      </Text>
    </ScreenContainer>
  );
};

export default LoginPage;
