import React, { useState, useEffect } from "react";
//import { GlobalContext } from "../../services/Global/GlobalContext";
//import { useNavigate } from 'react-router-dom'
import { BASE_URL } from "../../constants/urls";
import axios from "axios"
import { Image } from "./styled";



const FeedPage = () => {

  const [restaurants, setRestaurantes] = useState([])

  useEffect(() => {
    PegarRestaurantes()
  }, [])


  const PegarRestaurantes = () => {
    const url = `${BASE_URL}/restaurants`
    const token = localStorage.getItem("token")
    const header = {
      headers: {
        auth: token
      },
    }
    axios.get(url, header)
      .then((resp) => {
        setRestaurantes(resp.data.restaurants)
        console.log(resp.data.restaurants)
      })
      .catch((err) => {
        console.log("errooooo", err.response)
      })
  }

  const rendeRestaurants = restaurants.map((res) => {
    return <div key={res.id}>

      <div>
        <Image src={res.logoUrl} />
      </div>
      <p>{res.name}</p>
      <p>{res.deliveryTime}min</p>
      <p>Frete R${res.shipping},00</p>
    </div>
  })

  return (
    <div>
      {rendeRestaurants}
    </div>
  )
}

export default FeedPage