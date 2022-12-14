import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToAdress, goToFeedPage } from "../routes/cordinator";

export const login = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);

      if (res.data.user.hasAddress === false) {
        goToAdress(navigate);
      } else {
        goToFeedPage(navigate);
      }
      clear();
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
