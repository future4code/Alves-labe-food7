import React, { useContext, useState } from "react";
import * as CR from "./styled";
import { GlobalContext } from "../../services/Global/GlobalContext";

const CardRestaurant = ({categories, restaurant }) => {
  const { cart, setCart, cardProducts } = useContext(GlobalContext);

  const addCart = (newItem) => {
    const index = cart.findIndex((i) => i.id === newItem.id);
    const newCart = localStorage.getItem("cart") === null ? [] : [...JSON.parse(localStorage.getItem("cart"))];
    if (index === -1) {
      const cartItem = { ...newItem, amount: 1 };
      newCart.push(cartItem);
    } else {
      newCart[index].amount = newCart[index].amount + 1;
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart))
    localStorage.setItem("restaurant", JSON.stringify(restaurant))
    // localStorage.setItem("cart", JSON.stringify(cardProducts))
  };
  // console.log(localStorage.getItem("cart"));
  // console.log(restaurant)

  return (
    <div>
      {categories &&
        categories.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <p>{item}</p>
              </div>
              <div>
                {cardProducts &&
                  cardProducts.map((product) => {
                    if (item === product.category) {
                      return (
                        <CR.CardContainer key={product.id}>
                          <div>
                            <CR.ImgCard src={product.photoUrl} />
                          </div>
                          <CR.ProductCard>
                            <CR.ResName>{product.name}</CR.ResName>
                            <CR.ResName>{product.description}</CR.ResName>
                            <CR.Price>
                              {product.price.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </CR.Price>
                            <CR.Button onClick={() => addCart(product)}>
                              adicionar
                            </CR.Button>
                          </CR.ProductCard>
                        </CR.CardContainer>
                      );
                    }
                  })}
              </div>
            </div>
          );
        })}
    </div>
  );
  // return <div>{menuScreen ? menuScreen : <div>Carregando...</div>}</div>;
};
export default CardRestaurant;
