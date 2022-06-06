import {ADDITEM, DELETEITEM} from './action'



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
                if(exist1.qty==1){
                    return store.filter((x)=>x._id!=exist1._id)
                }else{
                    return store.map((x)=>
                    x.id==product._id? {...x, qty:x.qty-1}:x
                    );
                }
                
                default:
                   return store
                   
                   
            }

}
       
    