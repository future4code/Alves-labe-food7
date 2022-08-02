import React from "react";
import { ScreenContainer, Text } from "./styled";
import { useNavigate } from "react-router-dom";
import AdressForm from "./AdressForm";
import Header from "../../components/Header";

const AdressPage = () => {
  const navigate = useNavigate();

  return (
    <ScreenContainer>
      <Header />
      <Text>
        <p>Meu endereço</p>
      </Text>
      <AdressForm />
    </ScreenContainer>
  );
};

export default AdressPage;
