import { LOGOUT_SUCCESS}  from "./action"

const initState= {
    loading:false,
    error:false,
    isAuthenticated:false,
    token:"",
    email:""

}
export const logoutReducer= (store= initState, {type, payload})=>{
    switch(type){
      

                    case LOGOUT_SUCCESS:
                        return{
                            ...store,
                            loading:false,
                            error:true,
                            isAuthenticated:false,
                            token:null,
                            email:""
                        }
                    default:
                        return store

    }
}