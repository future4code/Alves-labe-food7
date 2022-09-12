import { Screen, Header, Address, Main, Products, Form, Bottom, Empty } from "./styles/styled";
import "./styles/index.css"
import { Footer } from "../../components/Footer/Footer";
import { BASE_URL } from '../../constants/urls'
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import { goToFeedPage } from "../../routes/cordinator";
import { useNavigate } from "react-router";

export function CartPage() {
  const [perfil, setPerfil] = useState({})
  const [pay, setPay] = useState('')
  // const [body, setBody] = useState([])

  const navigate = useNavigate()

  let soma = 0

  useEffect(() => {
    pegarPerfil()
  }, [])

  const pegarPerfil = () => {
    const url = `${BASE_URL}/profile`;
    const token = localStorage.getItem("token");
    const header = {
      headers: {
        auth: token,
      },
    };
    axios
      .get(url, header)
      .then((resp) => {
        setPerfil(resp.data.user);
        // console.log(resp.data.user);
      })
      .catch((err) => {
        console.log("errooooo", err.response);
      });
  };

  const restaurant = JSON.parse(localStorage.getItem("restaurant"))

  const order = JSON.parse(localStorage.getItem("cart"))

  // console.log(order)
  let body = []
  const orders = order !== null && order.map((item, i) => {
    soma += item.price * item.amount
    body.push({ "id": item.id, "quantity": item.amount })
    return <Card key={i} item={item} />
  })

  const placeOrder = (e) => {
    e.preventDefault()
    axios.post(
      BASE_URL + "/restaurants/" + restaurant?.id + "/order", { "products": body, "paymentMethod": pay }, {
      headers: {
        auth: localStorage.getItem("token")
      }
    }
    ).then((res) => {
      alert("Pedido Concluído")
      console.log(res)
      localStorage.setItem("address", restaurant?.address)
      localStorage.setItem("sum", soma.toFixed(2))
      localStorage.removeItem("cart")
      localStorage.removeItem("restaurant")
      goToFeedPage(navigate)
    }).catch((err) => alert(err.response.data.message))
  }

  const getRadio = (e) => {
    setPay(e.target.value)
  }

  // console.log(body)
  // console.log(pay)


  return (
    <Screen>
      <Header>
        <h1>Meu Carrinho</h1>
      </Header>
      <Address>
        <h1>Endereço de entrega</h1>
        <p>{perfil.address}</p>
      </Address>
      {restaurant?.deliveryTime &&
        <Main>
          <h1 className="name">{restaurant?.name}</h1>
          <p className="address">{restaurant?.address}</p>
          <p className="time">{restaurant?.deliveryTime} min</p>
        </Main>
      }
      <Products>
        {restaurant?.deliveryTime ? orders : <Empty>Carrinho vazio</Empty>}
      </Products>
      <Bottom>
        <p className="frete">Frete R${restaurant?.shipping?.toFixed(2)}</p>
        <div className="subtotal">
          <p>SUBTOTAL</p>
          <p className="price">R${soma.toFixed(2)}</p>
        </div>
        <p className="ways">Forma de pagamento</p>
        <hr />
        <Form onChange={getRadio} onSubmit={placeOrder}>
          <div>
            <input required type="radio" name="paymentMethod" value="money" id="money" />
            <label htmlFor="money">Dinheiro</label>
          </div>
          <div>
            <input required type="radio" name="paymentMethod" value="creditcard" id="creditCard" />
            <label htmlFor="creditCard">Cartão de Crédito</label>
          </div>
          <button type="submit">Confirmar</button>
        </Form>
      </Bottom>
      <Footer page='cart' />
    </Screen>
  )
}
