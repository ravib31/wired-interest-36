import React from 'react'
import { Routes, Route } from "react-router-dom"
import SignIn from '../../SignIn'
import SignUp from "../../SignUp"
import AdminLogin from '../Pages/AdminLogin'
import { UserListPage } from '../Pages/UserListPage'
import SingleUserOrderPage from '../Pages/SingleUserOrderPage'
import { AdminHomepage } from '../Pages/AdminHomepage'
import ProductList from '../Pages/ProductList'

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/login' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/adminlogin' element={<AdminLogin />} />
                <Route path='/adminhome' element={<AdminHomepage />} />
                <Route path='/userlist' element={<UserListPage />} />
                <Route path='/userlist/:id' element={<SingleUserOrderPage />} />
                <Route path='/productlist' element={<ProductList />} />
             </Routes>
        </div>
    )
}

export default MainRoutes