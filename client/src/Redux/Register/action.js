
export const LOADING_REGISTER= 'LOADING_REGISTER';
export const SUCCESS_REGISTER= 'SUCCESS_REGISTER';
export const FAILED_REGISTER= 'FAILED_REGISTER';




export const loadingRegister=()=>({
    type: LOADING_REGISTER,
    

});

export const successRegister = (payload)=>({
    type: SUCCESS_REGISTER,
    payload

});
export const failedRegister=()=>({
    type: FAILED_REGISTER
})

export const register= ({name,email, password})=>(dispatch)=>{
    dispatch(loadingRegister())
    fetch(`https://sourabh-server.herokuapp.com/user/register`,{
        method:"POST",
        body:JSON.stringify({name,email, password}),
        headers:{
            "Content-Type":"application/json"
        }
       
    }) .then((res)=> res.json())
    .then((res)=> dispatch(successRegister({email, token:res.data.user.tokens[0].token})))
   
    .catch((e)=> dispatch(failedRegister()))


}