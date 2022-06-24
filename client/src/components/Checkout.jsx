import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shippingAdd } from "../Redux/Checkout/action";
// import { Link } from 'react-router-dom';
import { Shipping } from "./Shipping";

export const Checkout = () => {
  const tot = localStorage.getItem("total");
  
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const add = useSelector((state) => state.shippingReducer)
  // console.log(add)

  const dispatch = useDispatch();

  
  const handleContinue = () => {
    const payload = {
      firstname,
      lastname,
      phone,
      email,
      address,
    };
    dispatch(shippingAdd(payload));
    alert("address added");
    setFirstname("");
    setLastname("");
    setPhone("");
    setEmail("");
    setAddress("");
  };

  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <h4>Your product total: Rs.{tot}</h4>
      </div>

      <div className=" col-4 m-auto shadow-lg pb-2 mb-5 bg-white rounded">
        <div className="d-flex justify-content-start shadow-none p-3 bg-light rounded">
          <h6 style={{ paddingLeft: "35px" }}>Shipping Details:</h6>
        </div>
        <div className="d-flex justify-content-center gap-2 mb-2">
          <input
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center gap-2 mb-2">
          <input
            type="text"
            placeholder="Phone No."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email id."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center mb-2">
          <textarea
            name=""
            id=""
            cols="50"
            rows="5"
            placeholder="Address:"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>
        
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-success "
            style={{ marginRight: "18px" }}
            onClick={handleContinue}
          >
            ADD
          </button>
        </div>
        <div
          className="p-3 pb-0"
          style={{ height: "200px", overflow: "scroll" }}
        >
          <Shipping />
        </div>
      </div>
    </div>
  );
};
