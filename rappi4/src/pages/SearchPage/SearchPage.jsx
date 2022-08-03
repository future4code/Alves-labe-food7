import { Screen, Header, Input, P } from "./styles/styled";
import "./styles/index.css"
import back from './img/back.svg'
import { useNavigate } from "react-router";

export function SearchPage() {

  const navigate = useNavigate()

  return (
    <Screen>
      <Header>
        <img src={back} alt="Voltar" onClick={()=>navigate(-1)} />
        <h1>Busca</h1>
      </Header>
      <Input type="text" placeholder="Restaurante" />
      <P>Busque por nome de restaurante</P>
    </Screen>
  )
}
