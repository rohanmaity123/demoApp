import { 
    CART_ITEM, 
    DELETE_CART_ITEM, 
    CLEAR_CART_ITEM,
    TOTAL_AMOUNT,
    OWNER_ID,
    USERDATA,
    CLEAR_LOGIN_DATA,
    ADD_CART_ITEM,
    HOME_BANNER,
    UPDATE_QTY
} from './type'

export const cartitem = (data) => ({
    type : CART_ITEM,
    payload : data
})
export const addcartitem = (data) => ({
    type : ADD_CART_ITEM,
    payload : data
})
export const total = (data) => ({
    type : TOTAL_AMOUNT,
    payload : data
})
export const ownerid = (data) => ({
    type : OWNER_ID,
    payload : data
})
export const deleteItem = (data) => ({
    type : DELETE_CART_ITEM,
    payload : data
})

export const clearCart = () => ({
    type : CLEAR_CART_ITEM
})

export const saveUserData = (data) => ({
    type : USERDATA,
    payload : data
})
export const clearLogData = () => ({
    type: CLEAR_LOGIN_DATA,
});
export const setBanner = (data) => ({
    type: HOME_BANNER,
    payload : data
});
export const updateQty = (data) => ({
    type: UPDATE_QTY,
    payload : data
});