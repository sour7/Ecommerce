import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Login/action.js";

import styled from "styled-components";

const Container = styled.div`
  /* position: fixed;
  z-index: 2000;
  background-color: white; */
  width: 100%;
  height: fit-content;
 
`;

export const Navbar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartReducer);
  const { isAuthenticated } = useSelector((state) => state.loginReducer);


  return (
    <div>
    <Container>
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
                <Link to="/" className="nav-link">
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

            <div className="buttons d-flex">
              <div>
                {!isAuthenticated ? (
                  <div>
                    <Link to="/signin" className="btn btn-outline-dark  ms-2">
                      <i className="fa fa-sign-in me-1"> Login</i>
                    </Link>

                    <Link to="/register" className="btn btn-outline-dark  ms-2">
                      <i className="fa fa-user-plus me-1 "> Sign Up</i>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <button className="btn btn-outline-dark  ms-2">
                    <i className="fa fa-box-arrow-right"
                        onClick={() => {
                          dispatch(logout());
                        }}
                      >
                        {" "}
                        Logout
                       
                      </i>
                      <img src="https://img.icons8.com/windows/32/000000/exit.png" style={{"width":"20px","marginLeft":"5px"}}/>
                    </button>
                  </div>
                )}
              </div>
              <Link to="/cart" className="btn btn-outline-dark  ms-2">
                <i className="fa fa-shopping-cart me-2">
                  Cart ({state.length})
                </i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Container>
    </div>
  );
};
