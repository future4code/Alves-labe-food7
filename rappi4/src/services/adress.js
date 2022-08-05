import { BASE_URL } from "../constants/urls";
import axios from "axios";

export const createAdress = (body, clear, navigate) => {
  axios
    .put(`${BASE_URL}/address`, body, {
      headers: {
        auth: window.localStorage.getItem("token"),
      },
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
      console.log(localStorage.getItem("token"),  res.data.token);
      
      clear();
    })
    .catch((err) => console.log(err.response.data));
};
