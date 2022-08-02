import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 0;
`;

export const Text = styled.div`
  text-align: center;
  font-style: normal;
  font-family: "IBM Plex Sans", sans-serif;
  h1 {
    color: #373737;
    font-size: 2.25rem;
    line-height: 2.938rem;
    margin-bottom: 0;
    margin-top: 1.563rem;
    font-weight: 700;
  }
  p {
    font-size: 1rem;
    line-height: 1.313rem;
    color: #000000;
    font-weight: 300;
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
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 0.5rem;
  ::placeholder {
    padding-left: 0.5rem;
  }
`;

export const Form = styled.form`
  margin-top: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  width: 328px;
  height: 42px;
  margin: 8px 0 0;
  border-radius: 2px;
  background-color: #e86e5a;
  border: none;
`;

export const TextSignUp = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  color: black;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  align-items: center;
  text-align: left;
  margin-top: 0.5rem;
  margin-left: 2.5rem;
  margin-right: 1rem;
`;
