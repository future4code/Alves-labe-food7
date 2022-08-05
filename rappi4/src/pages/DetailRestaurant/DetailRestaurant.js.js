import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useParams } from "react-router";
import CardRestaurant from "./CardRestaurant";
import * as D from "./styled";
import Header from "../../components/Header";
import { GlobalContext } from "../../services/Global/GlobalContext";
import {getColor} from '../FeedPage/getColor'

const DetailRestaurant = () => {
  const [categories, setCategories] = useState();
  const {
    detailRestaurant,
    setDetailRestaurant,
    cardProducts,
    setCardProducts,
  } = useContext(GlobalContext);

  const params = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${BASE_URL}/restaurants/${params.restaurantId}`, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        setDetailRestaurant(response.data.restaurant);
        setCardProducts(response.data.restaurant.products);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  useEffect(() => {
    const allCategories =
      cardProducts && cardProducts.map((product) => product.category);
    const categories = allCategories?.filter((item, i) => {
      return allCategories.indexOf(item) === i;
    });
    setCategories(categories);
  }, [cardProducts]);
  return (
    <D.ScreenContainer>
      <Header word={detailRestaurant?.name} back={2} />
      {detailRestaurant ? (
        <D.Main>
          <D.ImgLogo src={detailRestaurant.logoUrl} style={{backgroundColor: getColor(detailRestaurant)}}/>
          <D.HederDetails>
            <D.ResName>{detailRestaurant.name}</D.ResName>
            <D.FontDetails>{detailRestaurant.category}</D.FontDetails>
            <D.Line>
              <p>{detailRestaurant.deliveryTime} min</p>
              <D.Ship>Frete R${detailRestaurant.shipping},00</D.Ship>
            </D.Line>

            <D.FontDetails>{detailRestaurant.address}</D.FontDetails>
          </D.HederDetails>
          <D.Products>Produtos</D.Products>
          <D.Lin></D.Lin>
          <CardRestaurant categories={categories} restaurant={detailRestaurant} />
        </D.Main>
      ) : (
        <p>Carregando...</p>
      )}
    </D.ScreenContainer>
  );
};

export default DetailRestaurant;
