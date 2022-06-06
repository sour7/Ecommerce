 import React, { useState , useEffect} from 'react'
import { useDispatch } from 'react-redux'

 import { listing } from '../Redux/Listing/action'


 export  const Listing = () => {
    
     const[title,setTitle]= useState("")
     const[price,setPrice]= useState("")
     const[category,setCategory]= useState("")
     const[image,setImage]= useState("")
     const dispatch= useDispatch()

   
const handlelisting= ()=>{
    const payload= {
        title, price, category, image
    };
   dispatch(listing(payload))
   alert("product updated");
   setTitle("")
   setPrice("")
   setCategory("")
   setImage("")

}


  return (
    <div>
        <div style={{"marginLeft":"10%", "marginBottom":"10px"}}>
        <h1>create</h1>
        <input type="text" placeholder="TITLE" value={title} onChange={(e)=>setTitle(e.target.value)} style={{width:"200px","marginBottom":"10px"}}/> <br />
        <input type="text" placeholder="PRICE" value={price} onChange={(e)=>setPrice(e.target.value)} style={{width:"200px","marginBottom":"10px"}}/> <br />
        <select type="text"  placeholder="CATEGORY" value={category} onChange={(e)=>setCategory(e.target.value)} style={{width:"200px", "marginBottom":"10px"}} >
            <option  value="">Select Category</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option> 

        </select><br />
        <input type="text" placeholder="IMAGE LINK" value={image} onChange={(e)=>setImage(e.target.value)} style={{width:"200px" ,"marginBottom":"10px"}}/> <br />

        <button style={{width:"200px" , "marginBottom":"10px", "cursor":"pointer"}} onClick={handlelisting}>submit</button>
      
        
        </div>
      
       
    </div>
  )
  }





