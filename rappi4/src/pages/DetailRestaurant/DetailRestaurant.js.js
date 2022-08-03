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
    <div>
      <div>
        <D.ImgLogo src={detailRestaurant?.logoUrl} />
        <h1>{detailRestaurant.name}</h1>
        <p>{detailRestaurant.category}</p>
        <p>
          {detailRestaurant.deliveryTime} {detailRestaurant.shipping}
        </p>
        <p>{detailRestaurant.address}</p>
      </div>
      <h3>Produtos</h3>      
      <CardRestaurant cardProducts={cardProducts}/>
    </div>
  );
};

export default DetailRestaurant;
