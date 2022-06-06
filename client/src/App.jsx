import React from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
// import { Listing } from './components/Listing'
import { Products } from "./components/Products";
import { Routes, Route } from "react-router-dom";
import { Product } from "./components/Product";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";
// import { Deladd } from './components/Deladd'
import { Payment } from "./components/Payment";
import { Register } from "./components/Register";
import { Login } from "./components/Login";

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/signin" />;
};

function App() {
  const { isAuthenticated } = useSelector((state) => state.loginReducer);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path='/create' element={<Listing/>}></Route> */}
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
        <Route
          path="/cart"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Cart />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/address/:id" element={<Payment />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/signin" element={<Login />}></Route>
    
      </Routes>
    </div>
  );
}

export default App;
