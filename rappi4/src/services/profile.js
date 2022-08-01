import { BASE_URL } from "../constants/urls";
import axios from "axios";
import { goToAddAdressPage } from "../routes/cordinator";

export const registerUser = (bory, clear, navigate)   => {
    axios
      .post(`${BASE_URL}/signup`, bory)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        alert("Usuário cadastrado com sucesso!")
        goToAddAdressPage(navigate);
        clear();
      })
      .catch((error) => {
        console.log(error.response)
        alert("Algo deu errado! Tente novamente.");
      });
  }