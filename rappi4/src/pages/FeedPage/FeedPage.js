import React from 'react'
import { useNavigate } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls' 

const FeedPage = ()=> {
  const navigate = useNavigate()
  const receberRestaurants = useRequestData([],`${BASE_URL}/restaurants`)
  console.log(receberRestaurants)
 
  return (
    <div>FeedPage</div>
  )
}

export default FeedPage