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
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button>adicionar</button>
          <button>remover</button>
        </CR.ProductCard>
      </CR.CardContainer>
    );
  });
  return <div>{menuScreen}</div>;
};
export default CardRestaurant;
