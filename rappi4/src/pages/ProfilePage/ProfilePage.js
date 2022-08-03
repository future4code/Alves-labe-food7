import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from 'react-router-dom'
import { goUpdateProfile,goUpdateAdress } from '../../routes/cordinator';

const ProfilePage = () => {
  const navigate = useNavigate()
  const [perfil, setPerfil] = useState([])
  const [history, setHistory] = useState({})

  useEffect(() => {
    pegarPerfil()
  }, [])

  useEffect(() => {
    pegarHistorico()
  }, [])



  const pegarPerfil = () => {
    const url = `${BASE_URL}/profile`
    const token = localStorage.getItem("token")
    const header = {
      headers: {
        auth: token
      },
    }
    axios.get(url, header)
      .then((resp) => {
        setPerfil(resp.data.user)
        console.log(resp.data.user)
      })
      .catch((err) => {
        console.log("errooooo", err.response)
      })
  }

  const pegarHistorico = () => {
    const url = `${BASE_URL}/orders/history`
    const token = localStorage.getItem("token")
    const header = {
      headers: {
        auth: token
      },
    }
    axios.get(url, header)
      .then((resp) => {
        setHistory(resp)
        console.log(resp)
      })
      .catch((err) => {
        console.log("errooooo", err.response)
      })
  }



  return (
    <div>ProfilePage
      <p key={perfil.id}></p>
      <p>{perfil.name}</p>
      <p>{perfil.email}</p>
      <p>{perfil.cpf}</p>
      <button onClick={() => goUpdateProfile(navigate)}>editar</button>
      <div>
        <span>Endereço cadastrado:
          <hr />
          {perfil.address}</span>
          <button onClick={() => goUpdateAdress(navigate)}>editar</button>
      </div>


    </div>
  )
}

export default ProfilePage