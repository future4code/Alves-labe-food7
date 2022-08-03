import React, { useEffect } from 'react'
import { GlobalContext } from "./GlobalContext"
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'



const GlobalState = (props) => {

    useEffect(() => {
        PegarRestaurantes()
    }, [])


    const [restaurants, setRestaurantes] = useState([])


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
    console.log(restaurants)

    const values = { restaurants, setRestaurantes, PegarRestaurantes}
    const Provider = GlobalContext.Provider

    return (
        <Provider value={{ values }}>
            {props.children}
        </Provider>
    )

}


export default GlobalState