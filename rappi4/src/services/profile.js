import { BASE_URL } from "../constants/urls";
import axios from "axios";
import { goToAdress } from "../routes/cordinator";

export const registerUser = (bory, clear)   => {
    axios
      .post(`${BASE_URL}/signup`, bory)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        alert("Usuário cadastrado com sucesso!")
        goToAdress(navigate);
        clear();
      })
      .catch((error) => {
        alert(error.response.data.message)
        // alert(error.response.data);
      });
  }