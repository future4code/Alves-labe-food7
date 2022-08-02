import { BASE_URL } from "../constants/urls";
import axios from "axios";

export const createAdress = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}//address`, body, {
      headers: {
        auth: window.localStorage.getItem("token"),
      },
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
      clear();
      goToFeedPage(navigate);
    })
    .catch((err) => alert(err.response.data));
};
