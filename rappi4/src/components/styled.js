import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 44px;
  align-items: center;
  justify-content: center;
  background: #ededed;
`;

export const Image = styled.div`
  position: absolute;
  left: 20px;
  width: 1.751rem;
  height: 1.79rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Text = styled.p`
  display: flex;
  position: absolute;
  justify-content: center;
  text-align: center;
  font-family: "Noto Sans", sans-serif;
  background-color: none;
  font-style: normal;
  color: black;
  width: 3.438rem;
  height: 1.563rem;
  font-size: 18px;
  line-height: 1.533rem;
  border: none;
`;
