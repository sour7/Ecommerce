import React from "react";

import { useState } from "react";

import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Login/action";
import styled from "styled-components";

const Warning = styled.p`
  color: red;
  font-weight: 600;
`;

export const Login = () => {
  // const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.loginReducer);

  const handleLogin = (e) => {
    const payload = { email, password };
    dispatch(login(payload));
    setEmail("");
    setPassword("");
  };

  if (!error && isAuthenticated) {
    return (
      <div>
        <Navigate to="/cart" />
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center mt-4">
      <div>
        {error && <Warning>email or password is not valid !</Warning>}
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <button type="submit" onClick={handleLogin}>
          Log In
        </button>
        <br /> <br />
        <Link to="/register">Not a Member? Register Now</Link>
      </div>{" "}
      <br />
    </div>
  );
};
