import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const Navbar = () => {
  const state = useSelector((state) => state.cartReducer);
  const { isAuthenticated } = useSelector((state) => state.loginReducer)






  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-whilte py-3 shadow-sm">
        <div className="container">
          <Link
            to="/"
            className="navbar-brand"
            style={{ fontWeight: "800", fontSize: "34px" }}
          >
            Candy Mart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav mx-auto mb-2 mb-lg-0"
              style={{ fontSize: "20px", fontWeight: "500" }}
            >
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  {" "}
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/create" className="nav-link">
                  {" "}
                  Create
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contect" className="nav-link">
                  Contect
                </Link>
              </li>
            </ul>

            <div className="buttons">
              <Link to="/signin" className="btn btn-outline-dark  ms-2">
                <i className="fa fa-sign-in me-1" > Login</i>

              </Link>

              <Link to="/register" className="btn btn-outline-dark  ms-2">
                <i className="fa fa-user-plus me-1 "> Sign Up</i>
              </Link>
              <Link to="/cart" className="btn btn-outline-dark  ms-2">
                <i className="fa fa-shopping-cart me-2">
                  {" "}
                  Cart ({state.length})
                </i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
