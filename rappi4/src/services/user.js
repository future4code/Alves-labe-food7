import axios from "axios"
import { BASE_URL } from "../constants/urls"
//import { goTo } from '../routes/coordinator'

export const login = (body, clear) => {
   
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            console.log(body)
            console.log(res.data.token)
            localStorage.setItem("token", res.data.token)
            clear()
        })
        .catch((error) => {
            alert(error.response.data.message)
            
        })
}

