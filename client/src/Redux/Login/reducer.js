import {LOGIN_LOADING,LOGIN_SUCCESS, LOGIN_FAILURE}  from "./action"

const initState= {
    loading:false,
    error:false,
    isAuthenticated:false,
    token:"",
    email:""

}
export const loginReducer= (store= initState, {type, payload})=>{
    switch(type){
        case LOGIN_LOADING:
            return{
                ...store,
                loading:true,
                isAuthenticated:false,
            }
            case LOGIN_SUCCESS:
                return{
                    ...store,
                    loading:false,
                    error:false,
                    isAuthenticated:true,
                    token:payload.token,
                    email:payload.email
                }
                case LOGIN_FAILURE:
                    return{
                        ...store,
                        loading:false,
                        error:true,
                        isAuthenticated:false,
                        token:"",
                        email:""
                    }

                 
                    default:
                        return store

    }
}