import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Shipping = () => {
  const [data, setData] = useState([]);
 


  const navigate = useNavigate()

  useEffect(() => {
   getaddress();
  });

  const getaddress = async () => {
    const response = await fetch("https://sourabh-server.herokuapp.com/myaddress");

    setData(await response.json());

    //   console.log("add",data);
  };


  const deleteAddress = (id) => {
   
   
      fetch(`https://sourabh-server.herokuapp.com/delete/${id}`, { method: 'DELETE' })
          .then((res) => res.json())
          .then(data=>alert("shipping address removed !"))
          getaddress();
          
  
 




  }


  return (
    <div>

      {data.map((ad) => {
        return (
          <div key={ad._id}>
            <div key={ad._id} className='d-flex gap-2' style={{ "overflow": "auto" }} >
              <button style={{ "height": "30px" }} onClick={() => navigate(`/address/${ad._id}`)}>+</button>
              <button style={{ "height": "30px" }} onClick={()=>deleteAddress(ad._id)}>-</button>
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
