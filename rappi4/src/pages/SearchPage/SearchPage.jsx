import { Screen, Header, Input, P } from "./styles/styled";
import "./styles/index.css"
import back from './img/back.svg'
import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import { CardRestaurante, Image, ResName, Line } from "../FeedPage/styled";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { goToDetailRestaurant } from "../../routes/cordinator";
import { getColor } from "../FeedPage/getColor";

export function SearchPage() {
  const [restaurants, setRestaurantes] = useState([]);

  const navigate = useNavigate()

  useEffect(()=> {
    PegarRestaurantes()
  }, [])

  const PegarRestaurantes = () => {
    const url = `${BASE_URL}/restaurants`;
    const token = localStorage.getItem("token");
    const header = {
      headers: {
        auth: token,
      },
    };
    axios
      .get(url, header)
      .then((resp) => {
        setRestaurantes(resp.data.restaurants);        
      })
      .catch((err) => {
        console.log("errooooo", err.response);
      });
  };
  const {form, onChange} = useForm({"filter": ''})

  const rendeRestaurants = restaurants.filter((res)=> res.name.toUpperCase().includes(form.filter.toUpperCase())).map((res) => {
    return (
      <CardRestaurante
        key={res.id}
        onClick={() => goToDetailRestaurant(navigate, res.id)}
      >
        <Image style={{ backgroundColor: getColor(res) }}>
          <img src={res.logoUrl} />
          {/* <Image2 src={res.logoUrl} /> */}
        </Image>
        <ResName>{res.name}</ResName>
        <Line>
          <p>{res.deliveryTime}min</p>
          <p>Frete R${res.shipping},00</p>
        </Line>
      </CardRestaurante>
    );
  });

  return (
    <Screen>
      <Header>
        <img src={back} alt="Voltar" onClick={()=>navigate(-1)} />
        <h1>Busca</h1>
      </Header>
      <Input type="text" placeholder="Restaurante" autoFocus name="filter" value={form.filter} onChange={onChange} />
      {form.filter === '' ? <P>Busque por nome de restaurante</P> : rendeRestaurants.length === 0 ? <P>Não encontramos :(</P> : rendeRestaurants}
    </Screen>
  )
}
