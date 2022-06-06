//  ACTION TYPE
export const LOGIN_LOADING= 'LOGIN_LOADING';
export const LOGIN_SUCCESS= 'LOGIN_SUCCESS';
export const LOGIN_FAILURE= 'LOGIN_FAILURE';


// ACTION CREATOR

export const loginLoading=()=>({
    type:LOGIN_LOADING
});
export const loginSuccess=(payload)=>({
    type: LOGIN_SUCCESS,
    payload

});
export const loginFailure=()=>({
    type:LOGIN_FAILURE
})



export const login = ({email, password})=>(dispatch)=>{
    dispatch(loginLoading())
    fetch(`http://127.0.0.1:8000/user/login`,{
        method:"POST",
        body:JSON.stringify({email, password}),
        headers:{
            "Content-Type":"application/json"
        }
       
    }) .then((res)=> res.json())
    .then((res)=> dispatch(loginSuccess({email, token: res.token})))
    .catch((e)=> dispatch(loginFailure()))


}