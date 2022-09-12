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

export const Products = styled.section`
    width: 100%;
    min-height: calc(100vh - 241px - 48px - 44px - 76px - 112px);
    margin-bottom: 55px;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

export const Bottom = styled.section`
    width: 90%;
    height: 241px;
    /* background-color: gray; */
    display: flex;
    flex-direction: column;
    /* position: fixed; */
    position: relative;
    bottom: 41px;

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
        border: none;
        border-top: 1px solid #000;
        margin-bottom: 7px;
    }

    button {
        height: 42px;
        border-radius: 2px;
        background-color: #e86e5a;
        border: none;
        font-family: Roboto;
        font-size: 16px;
        letter-spacing: -0.39px;
        margin-top: 8px;
    }
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
    gap: 8px;

    div {
        display: flex;
        gap: 8px;
        align-items: center;
    }
`;

export const Empty = styled.p`
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
    position: relative;
    top: 4px;
`;