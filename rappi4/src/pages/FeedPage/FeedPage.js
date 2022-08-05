import React, { useState, useEffect } from "react";
//import { GlobalContext } from "../../services/Global/GlobalContext";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { goToDetailRestaurant } from "../../routes/cordinator";
import { CardRestaurante, Image, Line, ResName, Screen, Main } from "./styled";
import { HeaderWord } from "../../components/HeaderWord";
import { Input } from "../SearchPage/styles/styled";
import { Footer } from "../../components/Footer/Footer";
import { getColor } from "./getColor";
import { goToSearch } from "../../routes/cordinator";

const FeedPage = () => {
  const [restaurants, setRestaurantes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    PegarRestaurantes();
  }, []);

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

  return (
    <Screen>
      <HeaderWord word={"Rappi4"} />
      <Main>
        <Input placeholder="Restaurante" onClick={() => goToSearch(navigate)} />
        {rendeRestaurants}
      </Main>
      <Footer page="home" />
    </Screen>
  );
};

export default FeedPage;
