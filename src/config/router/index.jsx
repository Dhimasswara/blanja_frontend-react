import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginCust from '../../pages/Auth/Login'
import Register from '../../pages/Auth/Register'
import DetailProduct from '../../pages/DetailProduct/DetailProduct'
import Home from '../../pages/Home'
import Mybag from '../../pages/Mybag/Mybag'
import ForgotPassword from '../../pages/Auth/ForgotPassword/ResetPassword'
import Checkout from '../../pages/Checkout/Checkout'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home/>}></Route> 
                <Route path="/Login" element={<LoginCust/>}></Route>
                <Route path="/Register" element={<Register/>}></Route>
                <Route path="/ForgotPassword" element={<ForgotPassword/>}></Route>
                <Route path="/Detail" element={<DetailProduct/>}></Route>
                <Route path="/Mybag" element={<Mybag/>}></Route>
                <Route path="/Checkout" element={<Checkout/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router