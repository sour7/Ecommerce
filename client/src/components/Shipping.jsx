import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Shipping = () => {
  const [data, setData] = useState([]);

 const navigate= useNavigate()

  useEffect(() => {
    const getaddress = async () => {
      const response = await fetch("http://127.0.0.1:8000/myaddress");

      setData(await response.json());

    //   console.log("add",data);
    };
    getaddress();
  },[] );
// 


  return (
    <div>
     
    {data.map((ad)=>{
        return(
          <div  key={ad._id}>
            <div key={ad._id} className='d-flex gap-2' style={{"overflow":"auto"}} >
            <button style={{"height":"30px"}} onClick={()=>navigate(`/address/${ad._id}`)}>+</button>
                <h6>address:</h6>
                <p>{ad.firstname}</p>
                <p>{ad.lastname};</p>
                <p>{ad.phone}</p>
                <p>{ad.email}</p>
                <p>{ad.address}</p>
         
            </div>
           
           
            </div>

           
           
        )
    }
    )}
    </div>
  );
};
