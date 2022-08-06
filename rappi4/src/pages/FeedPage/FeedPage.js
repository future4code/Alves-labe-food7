import React, { useState, useEffect } from "react";
//import { GlobalContext } from "../../services/Global/GlobalContext";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { goToDetailRestaurant } from "../../routes/cordinator";
import { CardRestaurante, Image, Line, ResName, Screen, Main, Loading } from "./styled";
import { HeaderWord } from "../../components/HeaderWord";
import { Input } from "../SearchPage/styles/styled";
import { Footer } from "../../components/Footer/Footer";
import { getColor } from "./getColor";
import { goToSearch } from "../../routes/cordinator";
import { ActiveOrder } from "../../components/ActiveOrder";

const FeedPage = () => {
  const [restaurants, setRestaurantes] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true)
  const [activeOrder, setActiveOrder] = useState(false)

  useEffect(() => {
    PegarRestaurantes();
  }, []);

  useEffect(() => {
    axios.get(
      BASE_URL + "/active-order", {
      headers: {
        auth: localStorage.getItem("token")
      }
    }
    ).then((res) => {
      res.data.order === null ? setActiveOrder("none") : setActiveOrder("onGoing")
    }).catch((err) => console.log(err))
  })



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
        setIsLoading(false)
      })
      .catch((err) => {
        console.log("errooooo", err.response);
      });
  };

  const rendeRestaurants = restaurants.map((res) => {
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
          <p>
            Frete{" "}
            {res.shipping.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </Line>
      </CardRestaurante>
    );
  });

  console.log(activeOrder)

  return (
    <Screen>
      <HeaderWord word={"Rappi4"} />
      <Main>
        <Input placeholder="Restaurante" onClick={() => goToSearch(navigate)} />
        {isLoading ? <Loading>Carregando...</Loading> : rendeRestaurants}
      </Main>
      <Footer page="home" />
      {activeOrder === "onGoing" && <ActiveOrder />}
    </Screen>
  );
};

export default FeedPage;
