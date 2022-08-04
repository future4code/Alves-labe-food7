import React, { useEffect } from "react";
import { GlobalContext } from "./GlobalContext";
import { useState } from "react";

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [detailRestaurant, setDetailRestaurant] = useState();
  const [cardProducts, setCardProducts] = useState([]);

  const values = {
    cart,
    setCart,
    detailRestaurant,
    setDetailRestaurant,
    cardProducts,
    setCardProducts,
  };

  const Provider = GlobalContext.Provider;

  return <Provider value={values}>{props.children}</Provider>;
};

export default GlobalState;
