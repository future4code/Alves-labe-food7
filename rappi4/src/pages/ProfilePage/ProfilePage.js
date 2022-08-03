import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import { BASE_URL } from "../../constants/urls";


const ProfilePage = () => {

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
      <span>Endereço cadastrado:
        <hr />
        {perfil.address}</span>
      <button>editar</button>
    </div>
  )
}

export default ProfilePage