import React, { useEffect } from 'react'
import { GlobalContext } from "./GlobalContext"
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'



const GlobalState = (props) => {

   

    const [restaurants, setRestaurantes] = useState([])
    const values = { restaurants, setRestaurantes, }
    const Provider = GlobalContext.Provider

    return (
        <Provider value={{ values }}>
            {props.children}
        </Provider>
    )

}


export default GlobalState