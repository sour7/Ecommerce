import React from 'react'

import { useState } from 'react'

import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/Login/action';


export const Login = () => {
  // const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch= useDispatch()
  const {isAuthenticated}= useSelector((state)=>state.loginReducer)
  const {token}= useSelector((state)=>state.loginReducer)






  const handleLogin = (e) => {
    e.preventDefault()
   const payload={email, password};
 dispatch(login(payload))
    
  }
  if(isAuthenticated){
    return (
    <div>
    <Navigate to="/cart" />
    </div>
    )
}


  
 
     

  return (
    <div className="d-flex justify-content-center mt-4">

      <form>

        <input type="text" value={email} placeholder="email" onChange={(e) => { setEmail(e.target.value) }} /> <br /><br />
        <input type="password" value={password} placeholder="password" onChange={(e) => { setPassword(e.target.value) }} /> <br /><br />
        <button type='submit' onClick={handleLogin}>Log In </button><br /> <br />
       
        <Link to="/register">Not a Member? Register Now</Link>
      </form> <br />
      
      
     

    </div>
  )
}


