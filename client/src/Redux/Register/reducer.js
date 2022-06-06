import { LOADING_REGISTER, SUCCESS_REGISTER, FAILED_REGISTER } from "./action";

const initState={
    loading:false,
    error:false,
   name:"",
    email:"",
    apssword:"",
    
}

export const registerReducer = (store= initState,{type, payload})=>{
    switch(type){
        case LOADING_REGISTER:
            return{
                ...store,
                loading:true
            }
       
            case SUCCESS_REGISTER:
                return{
                    ...store,
                      name:payload.tname,
                   email:payload.email,
                   password:payload.password
                 }
                 case FAILED_REGISTER:
                    return {
                         ...store,
                         error:true
                     }
  
       default:
           return store
    }
}