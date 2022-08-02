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
import { goToSignUpPage } from "../../routes/coordinator";
import { signUp } from "../../services/users";

const AdressPage = () => {
  const navigate = useNavigate();
  const { form, handleInputChange, clear } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(form, clear, navigate);
  };

  return (
    <ScreenContainer>
      <Text>
        <h1>Olá, boas vindas ao LabEddit ;)</h1>
      </Text>
      <Form onSubmit={onSubmitForm}>
        <Input
          name={"street"}
          value={form.street}
          onChange={handleInputChange}
          placeholder="Rua/Av"
          required
          autoFocus
        />
        <Input
          name={"number"}
          value={form.number}
          onChange={handleInputChange}
          placeholder="Número"
          required
          type={"number"}
        />
        <Input
          name={"complement"}
          value={form.complement}
          onChange={handleInputChange}
          placeholder="Complemento"
          type={"number"}
        />
        <Input
          name={"street"}
          value={form.street}
          onChange={handleInputChange}
          placeholder="Rua/Av"
          required
          autoFocus
        />
        <TextSignUp>
          <p>
            Ao continuar, você concorda com o nosso Contrato de usuário e nossa
            Política de Privacidade
          </p>
          <Check>
            <input type={"checkbox"} required />
            <p>
              {" "}
              Eu concordo em receber emails sobre coisas legais no Labeddit
            </p>
          </Check>
        </TextSignUp>
        <ButtonLogin type={"submit"}>Cadastrar</ButtonLogin>
      </Form>
    </ScreenContainer>
  );
};

export default AdressPage;
