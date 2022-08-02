import { goToFeedPage } from "../routes/coordinator";

const useprotectedAdress = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token2");
    if (token) {
      goToFeedPage(navigate);
    }
  }, [navigate]);
};

export default useprotectedAdress;
