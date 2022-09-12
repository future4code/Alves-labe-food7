import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 44px;
  align-items: center;
  justify-content: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  margin-bottom: 8px;
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
