import React from "react";
//import { ScreenContainer, Text } from "./styled";
import { useNavigate } from "react-router-dom";
import {  getProfileAdress } from "../../services/profile";
import useForm from "../../hooks/useForm";
import { ScreenContainer } from "./styled"
import { Button, Input, Form, Fieldset } from "./styled";

const UpdateAdress = () => {
    const navigate = useNavigate();
    const { form, onChange, clear } = useForm({
      street: "",
      number: "",
      neighbourhood: "",
      city: "",
      state: "",
      complement: "",
    });
  
    const onSubmitProfile = (event) => {
        event.preventDefault();
        getProfileAdress(form, clear,navigate);
      };
  
    return (
        < ScreenContainer>
      < Form onSubmit={onSubmitProfile}>
        <Fieldset>
          <legend>Logradouro*</legend>
          <Input
            legend="Logradouro*"
            name={"street"}
            id="street"
            value={form.street}
            onChange={onChange}
            placeholder="Rua/Av"
            required
            autoFocus
          />
        </Fieldset>
        <Fieldset>
          <legend>Número*</legend>
          <Input
            name={"number"}
            value={form.number}
            onChange={onChange}
            placeholder="Número"
            required
            type={"number"}
          />
        </Fieldset>
        <Fieldset>
          <legend>Complemento</legend>
          <Input
            name={"complement"}
            value={form.complement}
            onChange={onChange}
            placeholder="Apto. / Bloco"
            type={"number"}
          />
        </Fieldset>
        <Fieldset>
          <legend>Bairro*</legend>
          <Input
            name={"neighbourhood"}
            value={form.neighbourhood}
            onChange={onChange}
            placeholder="Bairro"
            required
          />
        </Fieldset>
        <Fieldset>
          <legend>Cidade*</legend>
          <Input
            name={"city"}
            value={form.city}
            onChange={onChange}
            placeholder="Cidade"
            required
          />
        </Fieldset>
        <Fieldset>
          <legend>Estado*</legend>
          <Input
            name={"state"}
            value={form.state}
            onChange={onChange}
            placeholder="Estado"
            required
          />
        </Fieldset>
        <Button type={"submit"}>Salvar</Button>
      </ Form>

    </ ScreenContainer>
    );
};

export default UpdateAdress;