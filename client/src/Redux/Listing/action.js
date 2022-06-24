//  action type
export const LISTING_LOADING= 'LISTING_LOADING';
export const LISTING_SUCCESS= 'LISTING_SUCCESS';
export const LISTING_FAILURE= 'LISTING_FAILURE';
export const RESET='RESET'

// ACTION CREATOR

export const listingLoading=()=>({
    type:LISTING_LOADING
});
export const listingSuccess=(payload)=>({
    type: LISTING_SUCCESS,
    payload

});
export const reset=()=>({
    type:RESET
})
export const listingFailure=()=>({
    type:LISTING_FAILURE
})

export const listing= ({title,price, category, image })=>(dispatch)=>{
    dispatch(listingLoading())
    fetch(`https://sourabh-server.herokuapp.com/products/create`,{
        method:"POST",
        body:JSON.stringify({title,price, category, image }),
        headers:{
            "Content-Type":"application/json"
        }
       
    }) .then((res)=> res.json())
    .then((res)=> dispatch(listingSuccess({title,price, category, image })))
    .catch((e)=> dispatch(listingFailure()))


}