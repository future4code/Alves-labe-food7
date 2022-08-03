import { Screen, Header, Address, Main, Bottom, Footer } from "./styles/styled";
import "./styles/index.css"
import home from './img/home.svg'
import cart from './img/cart.svg'
import profile from './img/profile.svg'

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
          <h1>SUBTOTAL</h1>
          <p>R$67,00</p>
        </div>
        <h1 className="pagamento">Forma depagamento</h1>
      </Bottom>
      <Footer>
        <div>
          <img src={home} alt="" />
        </div>
        <div>
          <img src={cart} alt="" />
        </div>
        <div>
          <img src={profile} alt="" />
        </div>
      </Footer>
    </Screen>
  )
}
