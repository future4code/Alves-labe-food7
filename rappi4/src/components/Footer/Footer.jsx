import React from 'react'
import home1 from './img/home1.svg'
import home2 from './img/home2.svg'
import cart1 from './img/cart1.svg'
import cart2 from './img/cart2.svg'
import profile1 from './img/profile1.svg'
import profile2 from './img/profile2.svg'
import styled from 'styled-components';
import { goToCart, goToProfilePage, goToFeedPage } from '../../routes/cordinator';
import { useNavigate } from 'react-router';

const FooterStyle = styled.footer`
    width: 100%;
    height: 49px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    position: fixed;
    bottom: 0;
    background-color: #fff;
    border-top: 1px solid #b8b8b8;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export function Footer(props) {

  const navigate = useNavigate()

  return (
    <FooterStyle>
        <div>
          <img src={props.page === "home" ? home2 : home1} alt="" onClick={()=>goToFeedPage(navigate)} />
        </div>
        <div>
          <img src={props.page === "cart" ? cart2 : cart1} alt="" onClick={()=>goToCart(navigate)} />
        </div>
        <div>
          <img src={props.page === "profilePage" ? profile2 : profile1} alt="" onClick={()=>goToProfilePage(navigate)} />
        </div>
      </FooterStyle>
  )
}
