import { Add_To_Cart_Request, Add_To_Cart_Success, Cart_Action_Failure, Reduce_Item_From_Cart_Request, Reduce_Item_From_Cart_Success, Remove_Items_From_Cart_Request, Remove_Items_From_Cart_Success } from "../Actions/actions.types";


const Initial_Cart_State = {
    count : {},
    length : 0,
    total : 0
}

export const cartReducer = (cartState = Initial_Cart_State, action) => {
    const { type, payload } = action;
    // console.log(payload);
    switch (type) {
        case Add_To_Cart_Request:
            return {
                loading : true,
                request : 'pending'
            }
        case Add_To_Cart_Success:
            return {
                ...payload
            }
        case Cart_Action_Failure:
            return {
                ...cartState,
                loading : false,
                request : 'failure'
            }
        case Reduce_Item_From_Cart_Request:
            return {
                loading : true,
                request : 'pending'
            }
        case Reduce_Item_From_Cart_Success:
            return {
                ...payload
            }
        case Remove_Items_From_Cart_Request:
            return {
                loading : true,
                request : 'pending'
            }
        case Remove_Items_From_Cart_Success:
            return {
                ...payload
            }
        default:
            return cartState;
    }
}