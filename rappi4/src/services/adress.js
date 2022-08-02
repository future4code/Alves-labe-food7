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
      localStorage.setItem("token2", res.data.token);
      console.log(res.data);
      clear();
    })
    .catch((err) => console.log(err.response.data));
};
