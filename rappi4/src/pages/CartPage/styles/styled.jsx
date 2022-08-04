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

export const Address = styled.section`
    width: 100%;
    min-height: 76px;
    padding: 16px;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h1 {
        font-family: Roboto;
        font-size: 16px;
        letter-spacing: -0.39px;
        color: #b8b8b8;
    }

    p {
        font-family: Roboto;
        font-size: 16px;
        letter-spacing: -0.39px;
        color: #000;
    }
`;

export const Main = styled.section`
    width: 90%;
    /* height: calc(100vh - 120px); */
    /* background-color: green; */
    position: relative;

    .name {
        font-family: Roboto;
        font-size: 16px;
        letter-spacing: -0.39px;
        color: #e86e5a;
        margin-top: 16px;
    }

    .address{
        font-family: Roboto;
        font-size: 16px;
        letter-spacing: -0.39px;
        color: #b8b8b8;
        margin-top: 8px;
    }

    .time {
        font-family: Roboto;
        font-size: 16px;
        letter-spacing: -0.39px;
        color: #b8b8b8;
        margin-top: 8px;
    }
`;

export const Bottom = styled.section`
    width: 90%;
    height: 241px;
    /* background-color: gray; */
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 49px;

    .p {
        font-family: Roboto;
        font-size: 16px;
        letter-spacing: -0.39px;
    }

    .frete {
        align-self: flex-end;
        margin-bottom: 13px;
    }

    .subtotal {
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;

        .price {
            font-family: Roboto;
            font-size: 18px;
            font-weight: bold;
            letter-spacing: -0.43px;
            color: #e86e5a;
        }
    }

    .ways {
        margin-bottom: 8px;
    }

    hr {
        border-top: 1px solid #000;
        margin-bottom: 80px;
    }

    button {
        height: 42px;
        border-radius: 2px;
        background-color: #e86e5a;
        border: none;
        font-family: Roboto;
        font-size: 16px;
        letter-spacing: -0.39px;
    }
`;