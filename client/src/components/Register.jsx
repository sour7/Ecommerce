import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleRegister = (e) => {
    e.preventDefault();
    const user = { name, email, password };
 

    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/user/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: user,
    })
      .then((res) => {
        alert("registraion done!!");
        const token = res.data.user.tokens[0].token;
        console.log(token);
        localStorage.setItem("app_token", token);
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((e) => {
        alert("authentication failed");
        setName("");
        setEmail("");
        setPassword("");
      });
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <form>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br />
        <br />
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
        />
        <br /> <br />
        <button type="submit" onClick={handleRegister}>
          {" "}
          Register
        </button>{" "}
        <br />
        <br />
        <Link to="/signin">Already a Member? Log in Now</Link>
      </form>
    </div>
  );
};
