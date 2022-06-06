import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Register } from './Register'




export const Cart = () => {
  const [count, setCount] = useState()
  let totalprice = 0;

  const state = useSelector((state) => state.cartReducer)
  // console.log("state" ,state)

  const handleButton = (product) => {
    product.qty = product.qty + 1
    setCount(product.qty)
  }
  const handleButton1 = (product) => {
    product.qty = product.qty - 1;
    setCount(product.qty)

  }
  const key = localStorage.getItem('app_token')
  // console.log(key)
  if (!key) {
    return (
      <div><Register /></div>
    )
  }


  return (
    <div>
      <h1 className='text-center'>cart</h1>

      {state.map((product => {
        totalprice += product.qty * product.price;
        const sum = { total: totalprice };
        localStorage.setItem("total", totalprice)

        if (product.qty > 0) {
          return (
            <div key={product._id} >
              <div key={product._id} className='d-flex justify-content-center gap-5 m-2 '>
                <div>
                  <img src={product.image} alt={product.title} height="140px" width="110px" /></div>
                <div>
                  <h4>{product.title.substring(0, 12)}...</h4>
                  <h5>{product.qty} X Rs.{product.price}= Rs.{product.qty * product.price}</h5>
                  <button className='m-2' onClick={() => handleButton1(product)}>-</button>
                  <button onClick={() => handleButton(product)}>+</button></div>
              </div>
              <div>




              </div>

            </div>
          )


        }

      }))}



      <hr />
      <div className='col-10' >
        <div className='d-flex justify-content-end  gap-4'>
          <h5 >Total:  </h5>
          <h5>Rs.{totalprice}</h5>
        </div>
        <div className="d-flex justify-content-end  ">
          <Link to="/checkout">
            <button type="button" className="btn btn-success ml-5">PROCEED TO CHECKOUT</button></Link>
        </div>
      </div>

    </div>
  )
}


