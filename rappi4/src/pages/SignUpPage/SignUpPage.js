import React from "react";
import { ScreenContainer, LogoContainer, Text } from "./styled";
import logo from "../../assets/logo.svg";
import Header from "../../components/Header";

import SignUpForm from "./SignUpForm";
import useUntectedPage from "../../hooks/useUnprotectedPage";

const SignUpPage = () => {
  useUntectedPage();
  return (
    <ScreenContainer>
      <Header />
      <LogoContainer>
        <img src={logo} />
      </LogoContainer>
      <Text>
        <p>Cadastrar</p>
      </Text>
      <SignUpForm />
    </ScreenContainer>
  );
};
export default SignUpPage;
