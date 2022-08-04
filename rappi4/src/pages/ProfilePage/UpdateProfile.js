import React  from "react"
import useForm from "../../hooks/useForm";
import {  putProfile } from "../../services/profile";
import { Button, Input, Form, Fieldset } from "./styled";
import { ScreenContainer} from "./styled";


const UpdateProfile = () => {


    const { form, onChange, clear,navigate } = useForm({
        name: "",
        email: "",
        cpf: ""
       
      });
    
      const onSubmitProfile = (event) => {
        event.preventDefault();
        putProfile(form, clear,navigate);
      };
    
  return (  
    <div>
      <form onSubmit={onSubmitProfile}>
      <div>
        <legend>Nome*</legend>
        <input
          name="name"
          placeholder="Nome e sobrenome"
          type="text"
          value={form.name}
          onChange={onChange}
          required
        />
      </div>

      <div>
        <legend>E-mail*</legend>
        <input
          name="email"
          placeholder="email@email.com"
          type="email"
          value={form.email}
          onChange={onChange}
          required
        />
      </div>

      <div>
        <legend>CPF*</legend>
        <input
          name="cpf"
          placeholder="000.000.000-00"
          pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
          title={"000.000.000-00"}
          type="cpf"
          value={form.cpf}
          onChange={onChange}
          required
        />
      </div>
        <button>Salvar</button>
      </form>
    </div>
  )
}

export default  UpdateProfile