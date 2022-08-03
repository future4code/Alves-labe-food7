import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import AdressPage from "../pages/AdressPage/AdressPage"
import {CartPage} from "../pages/CartPage/CartPage"
import {SearchPage} from "../pages/SearchPage/SearchPage"
// import ResultPage from "../pages/ResultPage/ResultPage"
import DetailRestaurant from "../pages/DetailRestaurant/DetailRestaurant.js.js"
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"



const RoutesPage = () => {
   return(
    <BrowserRouter>
    < Routes>
       < Route index element={  <LoginPage />} />
       < Route path="/adress" element={<AdressPage />}/>
       < Route path="/cart" element={<CartPage/>}/>
       < Route path="/search" element={ <SearchPage/>}/>       
       < Route path="/detail/restaurant/:restaurantId" element={<DetailRestaurant/>}/>
       < Route path="/editProfile" element={<EditProfilePage/>}/>
       < Route path="/signUp" element={<SignUpPage/>}/>
       < Route path="/feedPage" element={<FeedPage/>}/>
       < Route path="/profilePage" element={<ProfilePage/>}/>
    </ Routes>
</BrowserRouter>
)}
   
  

export default RoutesPage

