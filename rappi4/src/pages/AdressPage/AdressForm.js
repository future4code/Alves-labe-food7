import React from "react";
import { Button, Input, Form } from "./styled";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { createAdress } from "../../services/adress";

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
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Input
        name={"street"}
        value={form.street}
        onChange={onChange}
        placeholder="Rua/Av"
        required
        autoFocus
      />
      <Input
        name={"number"}
        value={form.number}
        onChange={onChange}
        placeholder="Número"
        required
        type={"number"}
      />
      <Input
        name={"complement"}
        value={form.complement}
        onChange={onChange}
        placeholder="Complemento"
        type={"number"}
      />
      <Input
        name={"neighbourhood"}
        value={form.neighbourhood}
        onChange={onChange}
        placeholder="Bairro"
        required
      />
      <Input
        name={"city"}
        value={form.city}
        onChange={onChange}
        placeholder="Cidade"
        required
      />
      <Input
        name={"state"}
        value={form.state}
        onChange={onChange}
        placeholder="Estado"
        required
      />
      <Button type={"submit"}>Cadastrar</Button>
    </Form>
  );
}

export default AdressForm;
