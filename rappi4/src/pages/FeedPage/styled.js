import styled from "styled-components";

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 328px;
    height: 120px;
    margin-bottom: 8px;
    object-fit: contain;
  }
`;

export const CardRestaurante = styled.div`
  width: 360px;
  height: 188px;
  margin: 0.5rem;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`;

export const ResName = styled.p`
  padding-left: 16px;
  margin-bottom: 4px;
  margin-top: 0;
  padding-top: 0;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e86e5a;
`;
