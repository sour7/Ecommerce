
export const LOADING_SHIPPING_ADDRESS= 'LOADING_SHIPPING_ADDRESS';
export const SHIPPING_ADDRESS= 'SHIPPING_ADDRESS';


export const loadingshippingAddress=()=>({
    type: LOADING_SHIPPING_ADDRESS,

});

export const shippingAddress=(payload)=>({
    type: SHIPPING_ADDRESS,
    payload
   
    

});

export const shippingAdd= ({firstname, lastname, phone, email, address })=>(dispatch)=>{
    dispatch(loadingshippingAddress())
    fetch(`http://127.0.0.1:8000/address`,{
        method:"POST",
        body:JSON.stringify({firstname, lastname, phone, email, address }),
        headers:{
            "Content-Type":"application/json"
        }
       
    }) .then((res)=> res.json())
    .then((res)=> dispatch(shippingAddress({firstname, lastname, phone, email, address })))
    .catch((e)=> console.log(e))


}