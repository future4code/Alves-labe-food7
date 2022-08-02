import styled from "styled-components";

export const MainContainer = styled.div`
  width: 360px;
  height: 640px;
  padding: 0 0 26px;
  display: flex;
  flex-direction: column;
  border: solid 1px #cfcbcb;
  align-items: center;
  p {
    width: 296px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000;
  }
  form {
    display: flex;
    flex-direction: column;
    input {
      width: 322px;
      height: 56px;
      margin: 8px 0 0;
      border-radius: 2px;
      border: solid 1px #b8b8b8;
    }
    button {
      width: 328px;
      height: 42px;
      margin: 8px 0 0;
      border-radius: 2px;
      background-color: #e86e5a;
      border: none;
    }
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainHeader = styled.div`
  width: 360px;
  height: 64px;
  margin: 0 0 24px;
  padding: 0 0 10px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;
