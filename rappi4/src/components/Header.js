import { useNavigate } from "react-router-dom";
import { Container, Text, Image } from "./styled";
import Logo from "../assets/header.svg";
import React from "react";
import { goBack } from "../routes/cordinator";

function Header() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
  };

  const headerText = () => {
    if (window.location.pathname === `/signup`) {
      return <Text>Teste!</Text>;
    }
  };
  return (
    <Container>
      <Image>
        <img src={Logo} alt="logo voltar" onClick={() => goBack(navigate)} />
      </Image>
      {headerText()}
    </Container>
  );
}

export default Header;
