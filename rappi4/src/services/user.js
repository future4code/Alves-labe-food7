import axios from "axios"
import { BASE_URL } from "../constants/urls"
//import { goTo } from '../routes/coordinator'

export const login = (body, clear) => {
   
    axios.post(`${BASE_URL}/rappi4C/login`, body)
        .then((res) => {
            console.log(res.data.token)
            localStorage.setItem("token", res.data.token)
            clear()
        })
        .catch((err) => {
            console.log(err)
            
        })
}