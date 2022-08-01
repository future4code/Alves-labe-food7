import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import AdressPage from "../pages/AdressPage/AdressPage"
import CartPage from "../pages/CartPage/CartPage"
import SearchPage from "../pages/SearchPage/SearchPage"
import ResultPage from "../pages/ResultPage/ResultPage"
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"



const RoutesPage = () => {
    <BrowserRouter>
        <Routes>
            <Route index element={  <LoginPage />} />
           <Route path="Adress" element={<AdressPage />}/>
           <Route path="Cart" element={<CartPage/>}/>
           <Route path="Seach" element={ <SearchPage/>}/>
           <Route path="Result" element={<ResultPage/>}/>
           <Route path="EditProfile" element={<EditProfilePage/>}/>
           <Route path="SignUp" element={<SignUpPage/>}/>
           <Route path="FeedPage" element={<FeedPage/>}/>
           <Route path="ProfilePage" element={<ProfilePage/>}/>
        </Routes>
    </BrowserRouter>
}

export default RoutesPage