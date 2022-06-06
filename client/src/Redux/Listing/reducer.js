import {LISTING_LOADING,LISTING_SUCCESS, LISTING_FAILURE, RESET}  from "./action"

const initState= {
    loading:false,
    error:false,
    title:"",
    price:"",
    category:"",
    image:"",
   


}
export const listingReducer = (store= initState,{type, payload})=>{
    switch(type){
        case LISTING_LOADING:
            return{
                ...store,
                loading:true
            }
            case LISTING_SUCCESS:
                return{
                    ...store,
                    loading:false,
                    title:payload.title,
                    price:payload.price,
                    category:payload.category,
                    image:payload.image
   
   }
   case LISTING_FAILURE:
       return{
           ...store, 
           error:true
       }
       case RESET:
           return{...initstate}
       default:
           return store
    }
}