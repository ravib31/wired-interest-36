import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../../SignIn";
import SignUp from "../../SignUp";
import AdminLogin from "../Pages/AdminLogin";
import { UserListPage } from "../Pages/UserListPage";
import SingleUserOrderPage from "../Pages/SingleUserOrderPage";
import { AdminHomepage } from "../Pages/AdminHomepage";
import ProductList from "../Pages/ProductList";
import SinglePage from "../../SinglePage";
// import HomePage from "../../HomePage"
import ProductPage from "../../ProductPage";
import Navbar1 from "../../Navbar1";
import Navbar2 from "../../Navbar2";
import Footer from "../../Footer";
import Checkout from "../../checkout/Checkout";
// import Checkout from '../../checkout/';


const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar1 />
              <Navbar2/>

              <Footer />
            </>
          }
        />
        <Route
          path="/product"
          element={
            <>
              <Navbar1 />
              <Navbar2/>
              <ProductPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            // <PrivateRoute>
            <>
              <Navbar1 />
              <Navbar2/>
              {/* <CartPage/> */}
              <Footer />
            </>
            // </PrivateRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <>
              <Navbar1 />
              <Navbar2/>
              <Checkout />
              <Footer />
            </>
          }
        />

        <Route
          path="/product/:id"
          element={
            // <PrivateRoute>
            <>
              <Navbar1 />
              <Navbar2/>
              <SinglePage />
              <Footer />
            </>
            // </PrivateRoute>
          }
        />

        <Route
          path="/signin"
          element={
            // <PrivateRoute>
            <>
              <Navbar1 />
              <Navbar2/>
              <SignIn />
              <Footer />
            </>
            // </PrivateRoute>
          }
        />

        <Route
          path="/signup"
          element={
            // <PrivateRoute>
            <>
              <Navbar1 />
               <Navbar2/>
              <SignUp />
              <Footer />
            </>
            // </PrivateRoute>
          }
        />
      </Routes>

      <Routes>
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminhome" element={<AdminHomepage />} />
        <Route path="/userlist" element={<UserListPage />} />
        <Route path="/userlist/:id" element={<SingleUserOrderPage />} />
        <Route path="/single" element={<SingleUserOrderPage />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
