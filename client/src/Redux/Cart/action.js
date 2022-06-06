//  action type
export const ADDITEM= 'ADDITEM';
export const DELETEITEM= 'DELETEITEM';


// ACTION CREATOR

export const addCart=(product)=>({
    type:ADDITEM,
    payload:product
});
export const delCart=(product)=>({
    type: DELETEITEM,
    payload:product

});


