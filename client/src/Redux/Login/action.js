//  ACTION TYPE
export const LOGIN_LOADING= 'LOGIN_LOADING';
export const LOGIN_SUCCESS= 'LOGIN_SUCCESS';
export const LOGIN_FAILURE= 'LOGIN_FAILURE';
export const LOGOUT= 'LOGOUT'


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
export const logout=()=>({
    type:LOGOUT
})


export const login = (payload)=>(dispatch)=>{

    dispatch(loginLoading())
fetch (`https://sourabh-server.herokuapp.com/user/login`,{
  method:"POST",
  body: JSON.stringify(payload),
   headers: { 'Content-Type': 'application/json' },
  
})  .then(response => response.json())
.then(data => dispatch(loginSuccess({ email:data.user.email, token:data.token})))

.catch((err) =>dispatch(loginFailure(err)));

}