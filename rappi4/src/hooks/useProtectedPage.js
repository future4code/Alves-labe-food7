import { goToAdress, goToLogin } from "../routes/cordinator";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";

const useProtectedPage = () => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      goToLogin(navigate);
    }
  }, [navigate]);
};
export default useProtectedPage;
