import { BASE_URL } from "../constants/urls";
import axios from "axios";
import {goToAdress} from "../routes/cordinator"

export const registerUser = (bory, clear, navigate, confirmPassword) => {
  if (bory.password === confirmPassword) {
  axios
    .post(`${BASE_URL}/signup`, bory)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      alert("Usuário cadastrado com sucesso!");
      goToAdress(navigate);
      clear();
    })
    .catch((error) => {
      alert(error.response.data.message);
      // alert(error.response.data);
    })
  } else {
    alert("Senha não confere, tente novamente")
  }
};


export const putProfile = (body, clear, navigate) => {
  const url = `${BASE_URL}/profile`
    const token = localStorage.getItem("token")
    const header = {
      headers: {
        auth: token
      },
    }
    axios.put(url,body, header)
      .then((resp) => {
        console.log(resp.data)
      })
      .catch((err) => {
        console.log("errooooo", err.response)
      })
  }

  export const getProfileAdress = (body, clear, navigate) => {
    const url = `${BASE_URL}/address`
      const token = localStorage.getItem("token")
      const header = {
        headers: {
          auth: token
        },
      }
      axios.put(url,body, header)
        .then((resp) => {
          console.log(resp.data)
        })
        .catch((err) => {
          console.log("errooooo", err.response)
        })
    }
  