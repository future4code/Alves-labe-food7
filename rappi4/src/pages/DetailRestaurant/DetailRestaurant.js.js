import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useParams } from "react-router";
import CardRestaurant from "./CardRestaurant";
import * as D from "./styled";

const DetailRestaurant = () => {
  const [detailRestaurant, setDetailRestaurant] = useState([]);
  const [cardProducts, setCardProducts] = useState([]);

  const params = useParams();
  console.log(detailRestaurant);
  console.log(cardProducts);

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

  return (
    <D.ScreenContainer>
      <D.ImgLogo src={detailRestaurant?.logoUrl} />
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
      <CardRestaurant cardProducts={cardProducts} />
    </D.ScreenContainer>
  );
};

export default DetailRestaurant;
