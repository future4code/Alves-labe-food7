import styled from "styled-components"

const CardSty = styled.section`
    width: 90%;
    min-height: 112px;
    border-radius: 8px;
    border: 1px solid #b8b8b8;
    position: relative;
    display: grid;
    grid-template-columns: 30% 70%;

    img {
        width: 100%;
    }

    .words {
        display: flex;
        flex-direction: column;
        gap: 6px;
        align-self: center;
    }

    .name {
        font-family: Roboto;
        font-size: 16px;
        letter-spacing: -0.39px;
        color: #e86e5a;
    }

    .description {
        font-family: Roboto;
        font-size: 14px;
        letter-spacing: -0.34px;
        color: #b8b8b8;
    }

    .price {
        font-family: Roboto;
        font-size: 16px;
        letter-spacing: -0.39px;
    }

    .amount {
        width: 33px;
        height: 33px;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 8px;
        border: 1px solid #e86e5a;
        color: #e86e5a;
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: -1px;
        right: -1px;
    }

    button {
        width: 90px;
        height: 31px;
        border: solid 1px #e02020;
        background-color: transparent;
        border-top-left-radius: 8px;
        border-bottom-right-radius: 8px;

        font-family: Roboto;
        font-size: 12px;
        letter-spacing: -0.29px;
        text-align: center;
        color: #e02020;

        position: absolute;
        bottom: -1px;
        right: -1px;
    }
`;

export function Card({ item }) {

    const removeProduct = (removedItemId) => {
        const list = JSON.parse(localStorage.getItem("cart"))
        localStorage.setItem("cart", JSON.stringify(list.filter((item)=>item.id !== removedItemId)))
    }

    return (
        <CardSty>
            <img src={item.photoUrl} alt="" />
            <div className="words">
                <p className="name">{item.name}</p>
                <p className="description">{item.description}</p>
                <p className="price">R${item.price}</p>
            </div>
            <div className="amount">{item.amount}</div>
            <button onClick={()=> removeProduct(item.id)}>remover</button>
        </CardSty>
    )
}
