import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

import {useDispatch } from 'react-redux';
import { addCart } from '../Redux/Cart/action';
 

export const Product = () => {
    const {id}= useParams();
   
   const [product, setProduct] =useState([])
   const [loading, setLoading]= useState(false)
   
   const dispatch= useDispatch();
   const addProduct= (product)=>{
       dispatch(addCart(product))
   }
   
   useEffect(()=>{
       const getProduct= async () =>{
           setLoading(true)
           const response= await fetch(`https://sourabh-server.herokuapp.com/products/${id}`);
           setProduct(await response.json())
          
           setLoading(false)
       }
     getProduct() 
        
   },[]);

   const Loading=()=>{
       return(
           <>
           Loading...
           </>

       )
   }
   const ShowProduct =()=>{
       return(
           <>
           <div className="col-md-6" >
         <img src={product.image} alt={product.title} height="600px" width="100%" />
         </div>
         <div className="col-md-6" style={{"padding":"50px"}}>
         <h4 className='text-uppercase' style={{"textDecoration":"underline"}}>{product.category}</h4>
         <h2>{product.title}</h2>
         <h4>Rs.{product.price}</h4>
         <br />
         {/* <Link to="/cart"> */}
         <button className="btn btn-outline-dark me-3 fs-5" onClick={()=>addProduct(product)}>Add to Cart</button>
         {/* </Link> */}
         <Link to="/cart">
         <button className="btn btn-outline-dark fs-5">Go to Cart</button>
         </Link>
        

         </div>
           </>
       )
}
 
  return (
    <div>
        <div className="container">
            <div className="row">
                {loading? <Loading/> : <ShowProduct/>}
            </div>
        </div>
      
    </div>
  )
}


