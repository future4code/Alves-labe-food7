import React from "react";
import * as CR from "./styled";

const CardRestaurant = ({ cardProducts, categories }) => {
  // const tipo = cardProducts.map((product) => {

  // })
  // const menuScreen = cardProducts.map((product) => {
  //   const typeCategory = product.category

  //     return (
  //       <CR.CardContainer key={product.id}>
  //         <div>
  //           <p>{typeCategory}</p>
  //         </div>
  //         <div>
  //           <CR.ImgCard src={product.photoUrl} />
  //         </div>
  //         <CR.ProductCard>
  //           <p>{product.name}</p>
  //           <p>{product.description}</p>
  //           <p>R${product.price}</p>
  //           <button>adicionar</button>
  //           <button>remover</button>
  //         </CR.ProductCard>
  //       </CR.CardContainer>
  //     );

  // });

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
