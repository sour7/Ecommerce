import React from "react";
import { Products } from "./Products";

export const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="https://rukminim2.flixcart.com/flap/844/140/image/83454e0c56ca1dcc.jpeg?q=50"
          className="card-img "
          alt="background-img."
        />
        
      </div>
     <Products/>
    </div>
  );
};
