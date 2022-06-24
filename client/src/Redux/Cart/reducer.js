import {ADDITEM, DELETEITEM, CLEAR_CART} from './action'




        const cart=[]

  


export const cartReducer = (store = cart,action)=>{
    const product= action.payload
    switch(action.type){
        case ADDITEM:
            const exist= store.find((x)=>x._id==product._id)
            if(exist){
                return store.map((x)=>
                x.id==product.id?{...x, qty:x.qty+1}:x
                );
            }else{
                const product= action.payload;
                return [...store,{...product, qty:1}]
            }
          

            case DELETEITEM:
                const exist1= store.find((x)=>x._id==product._id)
                if(exist1.qty>0){
                    return store.filter((x)=>x._id!=exist1._id)
                }

                case CLEAR_CART:
                    return {
                        ...cart,
                        
                       
                    }

                default:
                   return store
                   
                   
            }

}
       
    