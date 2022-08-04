import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { goUpdateProfile, goUpdateAdress } from "../../routes/cordinator";
import * as PR from "./styled";
import edit from "../../assets/edit.svg";
import {Footer} from '../../components/Footer/Footer'

const ProfilePage = () => {
  const navigate = useNavigate();
  const [perfil, setPerfil] = useState([]);
  const [history, setHistory] = useState({});

  useEffect(() => {
    pegarPerfil();
  }, []);

  useEffect(() => {
    pegarHistorico();
  }, []);

  const pegarPerfil = () => {
    const url = `${BASE_URL}/profile`;
    const token = localStorage.getItem("token");
    const header = {
      headers: {
        auth: token,
      },
    };
    axios
      .get(url, header)
      .then((resp) => {
        setPerfil(resp.data.user);
        console.log(resp.data.user);
      })
      .catch((err) => {
        console.log("errooooo", err.response);
      });
  };

  const pegarHistorico = () => {
    const url = `${BASE_URL}/orders/history`;
    const token = localStorage.getItem("token");
    const header = {
      headers: {
        auth: token,
      },
    };
    axios
      .get(url, header)
      .then((resp) => {
        setHistory(resp);
        console.log(resp);
      })
      .catch((err) => {
        console.log("errooooo", err.response);
      });
  };

  return (
    <PR.Screen>
      <PR.Profile>
        <p key={perfil.id}></p>
        <p>{perfil.name}</p>
        <p>{perfil.email}</p>
        <p>{perfil.cpf}</p>
        <PR.Img src={edit} onClick={() => goUpdateProfile(navigate)} />
      </PR.Profile>
      <PR.Adress>
        <PR.AdressTitle>Endereço cadastrado:</PR.AdressTitle>
        <PR.AdressName>{perfil.address}</PR.AdressName>
        <PR.ImgAd src={edit} onClick={() => goUpdateAdress(navigate)} />
      </PR.Adress>
      <Footer page="profile"/>
    </PR.Screen>
  );
};

export default ProfilePage;
