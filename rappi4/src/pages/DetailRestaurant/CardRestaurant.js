import React from "react";
import * as CR from "./styled";

const CardRestaurant = (props) => {
  const menuScreen = props.cardProducts.map((product) => {
    return (
      <CR.CardContainer key={product.id}>
        <div>
          <CR.ImgCard src={product.photoUrl} />
        </div>
        <CR.ProductCard>
          <CR.ResName>{product.name}</CR.ResName>
          <CR.Description>{product.description}</CR.Description>
          <CR.Price>R$ {product.price}</CR.Price>
          <CR.Button>adicionar</CR.Button>
          {/* <button>remover</button> */}
        </CR.ProductCard>
      </CR.CardContainer>
    );
  });
  return <div>{menuScreen}</div>;
};
export default CardRestaurant;
