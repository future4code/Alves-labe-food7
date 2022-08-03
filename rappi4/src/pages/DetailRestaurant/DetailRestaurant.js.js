import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

const DetailRestaurant = () => {
  
  const [detailRestaurant, setDetailRestaurant] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${BASE_URL}/restaurants/${id}`, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setDetailRestaurant(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  const menuScreen = detailRestaurant.map((product) => {
    
    return (
      <div key={product.id}>
        <div>
          <img src={product.photoUrl}/>
        </div>
        <div>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button>adicionar</button>
      </div>
      </div>
    );
  });

  return (
    <div>
      <div>
        <img src={detailRestaurant.restaurant?.logoUrl} />
        <h1>{detailRestaurant.name}</h1>
        <p>{detailRestaurant.category}</p>
        <p>
          {detailRestaurant.deliveryTime} {detailRestaurant.shipping}
        </p>
        <p>{detailRestaurant.address}</p>
      </div>
      <h3>Produtos</h3>

    </div>
  );
};

export default DetailRestaurant;
