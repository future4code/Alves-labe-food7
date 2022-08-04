import React, { useEffect } from "react";
import { GlobalContext } from "./GlobalContext";
import { useState } from "react";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { useParams } from "react-router";


const GlobalState = (props) => {
  const [perfil, setPerfil] = useState([]);
  const [restaurants, setRestaurantes] = useState([]);
  const [cart, setCart] = useState([]);
  const [detailRestaurant, setDetailRestaurant] = useState();
  const [cardProducts, setCardProducts] = useState([]);

  //   useEffect(() => {
  //     PegarRestaurantes();
  //   }, []);

  //   const PegarRestaurantes = () => {
  //     const url = `${BASE_URL}/restaurants`;
  //     const token = localStorage.getItem("token");
  //     const header = {
  //       headers: {
  //         auth: token,
  //       },
  //     };
  //     axios
  //       .get(url, header)
  //       .then((resp) => {
  //         setRestaurantes(resp.data.restaurants);
  //       })
  //       .catch((err) => {
  //         console.log("errooooo", err.response);
  //       });
  //   };
//   const params = useParams();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     axios
//       .get(`${BASE_URL}/restaurants/${params.restaurantId}`, {
//         headers: {
//           auth: token,
//         },
//       })
//       .then((response) => {
//         setDetailRestaurant(response.data.restaurant);
//         setCardProducts(response.data.restaurant.products);
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });
//   }, []);

  const values = {
    restaurants,
    setRestaurantes,
    perfil,
    setPerfil,
    cart,
    setCart,
    detailRestaurant,
    cardProducts,
  };

  const Provider = GlobalContext.Provider;

  return <Provider value={values}>{props.children}</Provider>;
};

export default GlobalState;
