import React from "react";
import {
  ScreenContainer,
  Text,
  Image,
  Input,
  Form,
  ButtonSignUp,
  ButtonLogin,
  TextSignUp,
  Check,
} from "./styled";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { createAdress } from "../../services/adress";
import AdressForm from "./AdressForm";

const AdressPage = () => {
  const navigate = useNavigate();
  const { form, onChange, clear } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    createAdress(form, clear, navigate);
  };

  return (
    <ScreenContainer>
      <Text>
        <p>Meu endereço</p>
      </Text>
      <AdressForm />
    </ScreenContainer>
  );
};

export default AdressPage;
