import React from "react";
import * as CR from "./styled";

const CardRestaurant = ({ cardProducts, categories }) => {

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
                        <CR.CardContainer>
                          <div key={product.id}>
                            <CR.ImgCard src={product.photoUrl} />
                          </div>
                          <CR.ProductCard>
                            <CR.ResName>{product.name}</CR.ResName>
                            <CR.ResName>{product.description}</CR.ResName>
                            <CR.Price>R${product.price}</CR.Price>
                            <CR.Button>adicionar</CR.Button>
                            
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
