import React from "react";
import { Button, Input, Form, Fieldset } from "./styled";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { createAdress } from "../../services/adress";
import {goToFeedPage} from '../../routes/cordinator'

function AdressForm() {
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
    goToFeedPage(navigate)
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Fieldset>
        <legend>Logradouro*</legend>
        <Input
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
          type={"text"}
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
    </Form>
  );
}

export default AdressForm;
