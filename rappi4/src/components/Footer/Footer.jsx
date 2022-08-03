import React from 'react'
import home1 from './img/home1.svg'
import cart1 from './img/cart1.svg'
import profile1 from './img/profile1.svg'
import styled from 'styled-components';

const FooterStyle = styled.footer`
    width: 100%;
    height: 49px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    position: fixed;
    bottom: 0;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export function Footer() {
  return (
    <FooterStyle>
        <div>
          <img src={home1} alt="" />
        </div>
        <div>
          <img src={cart1} alt="" />
        </div>
        <div>
          <img src={profile1} alt="" />
        </div>
      </FooterStyle>
  )
}
