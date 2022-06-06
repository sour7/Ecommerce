import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Payment = () => {
  const [cardholdername, setCardholdername] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [validity, setValidity] = useState("");
  const [cvv, setCvv] = useState("");

  const total = localStorage.getItem("total");

  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/myaddress/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setDetails(res))
      .catch((err) => console.log(err));
  }, []);

  const handlepayment = () => {
    if (
      cardholdername == "saurav" &&
      cardnumber == "987654321" &&
      validity == "02/25" &&
      cvv == "203"
    ) {
      alert("Order placed successfully");
    } else {
      alert("wrong card details");
    }

    setCardholdername("");
    setCardnumber("");
    setValidity("");
    setCvv("");
  };

  return (
    <div>
      <div className="d-flex justify-content-center mb-2">
        <h4>payment</h4>
      </div>

      <div style={{ paddingLeft: "35%" }}>
        <p>your product will be delivered to following addres:</p>
        <div className="d-flex gap-2 m-0">
          <h5>Address: </h5>
          <p>Name: {details.firstname}</p>
          <p>{details.lastname}</p>
          <p>Address:{details.address}</p>
        </div>
      </div>

      <div
        className=" mt-3 shadow-sm p-3 mb-5 bg-body rounded m-auto"
        style={{ width: "30%" }}
      >
        <h6>Card Details:</h6>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Card holder Name"
            value={cardholdername}
            onChange={(e) => setCardholdername(e.target.value)}
            required
          />

          <br />

          <input
            type="number"
            className="form-control"
            placeholder="Card Number"
            value={cardnumber}
            onChange={(e) => setCardnumber(e.target.value)}
            required
          />

          <div className="d-flex mt-4">
            <input
              type="text"
              placeholder="Valid thru"
              className="form-control"
              value={validity}
              onChange={(e) => setValidity(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="CVV"
              className="form-control"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
          <div className="d-flex mt-4 me-3">
            <button
              type="button"
              className="btn btn-success"
              onClick={handlepayment}
            >
              PAY Rs.{total}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
