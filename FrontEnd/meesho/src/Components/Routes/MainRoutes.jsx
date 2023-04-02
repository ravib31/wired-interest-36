import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Page/HomePage";
import Product from "../Page/Product";
import { CartPage } from "../Page/CartPage";

const MainRoutes = () => {

  return (
      <Routes>

          <Route to="/" element={ <HomePage /> } />

          <Route to="/product" element={ <Product />} />

          <Route to="/cart" element={  <CartPage /> } />

      </Routes>
  )
}

export default MainRoutes;



{/* <Routes>
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminhome" element={<AdminHomepage />} />
        <Route path="/userlist" element={<UserListPage />} />
        <Route path="/userlist/:id" element={<SingleUserOrderPage />} />
        <Route path="/single" element={<SingleUserOrderPage />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>  */}
