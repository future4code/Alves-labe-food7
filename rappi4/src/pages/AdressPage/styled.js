import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 0;
`;

export const Text = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  font-style: normal;
  font-family: "Roboto";
  h1 {
    color: #373737;
    font-size: 2.25rem;
    line-height: 2.938rem;
    margin-bottom: 0;
    margin-top: 1.563rem;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    line-height: 1.313rem;
    color: #000000;
    font-weight: normal;
    padding: 0;
    margin: 0;
  }
`;

export const Image = styled.div`
  width: 5.25rem;
  height: 5.25rem;
  margin-top: 4.688rem;
  padding: 0;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d5d8de;
  border-radius: 0.25rem;
  background: #ffffff;
  width: 22.688rem;
  height: 3.75rem;
  color: black;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 0.5rem;
  ::placeholder {
    padding-left: 0.5rem;
  }
`;

export const Form = styled.form`
  margin-top: 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  width: 344px;
  height: 42px;
  margin: 8px 0 0;
  border-radius: 2px;
  background-color: #e86e5a;
  border: none;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`;

export const Fieldset = styled.fieldset`
  flex-direction: row;
  border: 1px solid #d5d8de;
  background: #ffffff;
  width: 328px;
  height: 56px;
  color: #b8b8b8;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 30px;
  margin: 0;
  padding: 8px, 0, 8px, 0;
  align-items: flex-start;
  display: flex;
  border-radius: 4px;

  legend {
    margin-right: auto;
    color: #b8b8b8;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
  }
  input {
    width: 264px;
    height: 18px;
    font-family: "Roboto";
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: black;
    border: none;
    ::placeholder {
      color: #b8b8b8;
      font-family: "Roboto";
    }
  }
`;
