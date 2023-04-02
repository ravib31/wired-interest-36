import React from 'react'
import { Routes, Route } from "react-router-dom"
import SignIn from '../SignIn'
import SignUp from "../SignUp"
import AdminLogin from '../Admin/Pages/AdminLogin'
import { UserListPage } from '../Admin/Pages/UserListPage'
import SingleUserOrderPage from '../Admin/Pages/SingleUserOrderPage'
import { AdminHomepage } from '../Admin/Pages/AdminHomepage'
import ProductList from '../Admin/Pages/ProductList'
import HomePage from '../Page/HomePage'
import { CartPage } from '../Page/CartPage'


const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/adminlogin' element={<AdminLogin />} />
                <Route path='/adminhome' element={<AdminHomepage />} />
                <Route path='/userlist' element={<UserListPage />} />
                <Route path='/userlist/:id' element={<SingleUserOrderPage />} />
                <Route path='/productlist' element={<ProductList />} />
                <Route path='/cart' element={<CartPage />} />
             </Routes>
        </div>
    )
}

export default MainRoutes