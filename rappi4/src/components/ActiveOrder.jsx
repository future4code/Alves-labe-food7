import styled from "styled-components"
import clock from '../pages/CartPage/img/clock.svg'

const Card = styled.section`
    width: 100%;
    min-height: 118px;
    background-color: #e86e5a;
    position: fixed;
    bottom: 49px;
    display: grid;
    grid-template-columns: 22% 88%;
    padding: 24px 24px 24px 0;

    .order {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-self: center;
    }

    .clock {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 40%;
    }

    p {
        font-family: Roboto;
        font-size: 16px;
        letter-spacing: -0.39px;
        width: calc(100% - 24px);
    }

    .one {
        color: #fff;
    }

    .tree {
        font-weight: bold;
    }
`;

export function ActiveOrder() {

    const restaurant = localStorage.getItem("address")
    const sum = localStorage.getItem("sum")

    console.log(restaurant)

    return (
        <Card>
            <div className="clock"><img src={clock} alt="" /></div>
            <div className="order">
                <p className="one">Pedido em andamento</p>
                <p>{restaurant}</p>
                <p className="tree">SUBTOTAL R${sum}</p>
            </div>
        </Card>
    )
}
