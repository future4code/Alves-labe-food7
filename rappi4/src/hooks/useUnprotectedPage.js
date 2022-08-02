import { goToAdress } from "../routes/cordinator";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";

const useUntectedPage = () => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {      
      goToAdress(navigate);
    }
  }, [navigate]);
};
export default useUntectedPage