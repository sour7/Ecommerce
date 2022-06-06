export const LOGOUT_SUCCESS= 'LOGOUT_SUCCESS';

export const logoutSuccess=()=>({
    type:LOGOUT_SUCCESS
});

export const logout = ()=>(dispatch)=>{
  
    fetch(`http://127.0.0.1:8000/user/login`,{
        method:"POST",
        body:JSON.stringify(),
        headers:{
            "Content-Type":"application/json"
        }
       
    }) .then((res)=> res.json())
    .then((res)=> dispatch(logoutSuccess()))
    

}