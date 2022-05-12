
// import { createSlice } from '@reduxjs/toolkit'

// export const CartSlice = createSlice({
//     name: 'CartItems',
//     initialState: {
//         cartItems:[],
//         total:'',
//     },
//     reducers: {
//         addCart(state,action) {
//         state.cartItems = action.payload
//       },
//       addCartItem(state, action) {
//         state.cartItems = state.cartItems.concat(data)
//       }
//     }
//   })
  
//   export const { addCart, addCartItem } = CartSlice.actions;
  
//   export default CartSlice.reducer;

const IntState={
    cartItems:[],
    total:'',
    ownerId:''
}

const cartItems = (state = IntState,action)=>{
    switch(action.type){
        case 'CART_ITEM':
            return addCart(action.payload, state)
        case 'ADD_CART_ITEM':
            return addCartItem(action.payload, state)
        case 'DELETE_CART_ITEM':
            return deleteItem(action.payload, state)
        case 'CLEAR_CART_ITEM':
            return {...state, cartItems : []}
        case 'TOTAL_AMOUNT':
            return {...state, total: action.payload}
        case 'OWNER_ID':
            return {...state, ownerId: action.payload}
        case 'UPDATE_QTY':
            return updateCount(action.payload, state)
        default:
            return state;
    }
}

export default cartItems;

const updateCount = (data, state) => {
    let index = state.cartItems.findIndex(it => it.id == data.id);
    if(index >= 0){
        console.log("state.cartItems[index].qty", typeof(state.cartItems[index].qty))
        state.cartItems[index].qty = data.count;
        return {...state, cartItems: state.cartItems}
    }else{
        return state;
    }
}

const addCart = (data, state) => {
    return {...state, cartItems : data}
}
const addCartItem = (data, state) =>{
        console.log('reduxdata',data)
        return {...state, cartItems : state.cartItems.concat(data)}
}
const deleteItem = (data, state) => {
    let cartNewItems = state.cartItems.filter(it => it._id != data);
    return {...state, cartItems : cartNewItems }
}