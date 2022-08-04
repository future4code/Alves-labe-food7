import { Screen, Header, Address, Main, Bottom } from "./styles/styled";
import "./styles/index.css"
import { Footer } from "../../components/Footer/Footer";

export function CartPage() {

  return (
    <Screen>
      <Header>
        <h1>Meu Carrinho</h1>
      </Header>
      <Address>
        <h1>Endereço de entrega</h1>
        <p>Endereço de Exemplo Jorge Carvalho</p>
      </Address>
      <Main>
        <h1 className="name">Nome do Restaurante</h1>
        <p className="address">R. Exemplo de Rua</p>
        <p className="time">30 - 45 min</p>
      </Main>
      <Bottom>
        <p className="frete">Frete R$6,00</p>
        <div className="subtotal">
          <p>SUBTOTAL</p>
          <p className="price">R$67,00</p>
        </div>
        <p className="ways">Forma de pagamento</p>
        <hr />
        <button>Confirmar</button>
      </Bottom>
      <Footer page='cart'/>
    </Screen>
  )
}
