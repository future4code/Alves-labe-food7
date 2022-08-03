import styled from "styled-components";
import search from "../img/search.svg"

export const Screen = styled.section`
    width: 100%;
    min-height: calc(100vh - 44px);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.section`
    height: 44px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 0 8px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);

    img {
        position: absolute;
        left: 4.44%;
    }

    h1 {
        font-family: Roboto;
        font-size: 16px;
        letter-spacing: -0.39px;
        text-align: center;
    }
`;

export const Input = styled.input`
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: 17px;

    width: 90%;
    height: 56px;
    padding: 16px 8px 16px 56.3px;
    border-radius: 2px;
    border: solid 1px #b8b8b8;

    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
`;

export const P = styled.p`
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000;

    margin-top: 20px;
`;