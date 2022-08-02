import React from "react";
import * as S from "./styled";
import logo from "../../assets/logo.svg";
import Header from "../../components/Header";

import SignUpForm from "./SignUpForm";
import useUntectedPage from "../../hooks/useUnprotectedPage"

const SignUpPage = () => {
  useUntectedPage()
  return (
    <S.MainContainer>
      <Header />
      <S.MainHeader></S.MainHeader>
      <S.LogoContainer>
        <img src={logo} />
      </S.LogoContainer>
      <p>
        <strong>Cadastrar</strong>
      </p>
      <SignUpForm />
    </S.MainContainer>
  );
};
export default SignUpPage;
