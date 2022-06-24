//  action type
export const ADDITEM= 'ADDITEM';
export const DELETEITEM= 'DELETEITEM';
export const CLEAR_CART='CLEAR_CART'


// ACTION CREATOR

export const addCart=(product)=>({
    type:ADDITEM,
    payload:product
});
export const delCart=(product)=>({
    type: DELETEITEM,
    payload:product

});

export const clearCart=()=>({
    type:CLEAR_CART
   
   
})

