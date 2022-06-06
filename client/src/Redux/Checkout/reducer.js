import { LOADING_SHIPPING_ADDRESS,SHIPPING_ADDRESS } from "./action";

const initState= {
    loading:false,
    firstname:"",
    lastname:"",
    phone:"",
    email:"",
    address:"",
    

}

export const shippingReducer = (store= initState,{type, payload})=>{
    switch(type){
        case LOADING_SHIPPING_ADDRESS:
            return{
                ...store,
                loading:true
            }
       
            case SHIPPING_ADDRESS:
                return{
                    ...store,
                   firstname:payload.firstname,
                   lastname:payload.lastname,
                   phone:payload.phone,
                   email:payload.email,
                   address:payload.address
   
   }
  
       default:
           return store
    }
}