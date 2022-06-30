import { Add_To_Cart_Request, Add_To_Cart_Success, Cart_Action_Failure, Reduce_Item_From_Cart_Request, Reduce_Item_From_Cart_Success, Remove_Items_From_Cart_Request, Remove_Items_From_Cart_Success } from "../Actions/Actiontypes";


export const cartReducer = (state, action) => {
    const { type, payload } = action, { count } = state;
    // eslint-disable-next-line no-unused-vars
    const [ category, id, price ] = payload;
    switch (type) {
        case Add_To_Cart_Request:
            return {
                ...state,
                loading : true,
                request : 'pending'
            }
        case Add_To_Cart_Success:
            return {
                count : {
                    ...count,
                    [category] : {
                        ...count[category],
                        [id] : count[category] ?
                        count[category][id]
                        ?
                        count[category][id] + 1 : 1
                        :
                        1
                    }
                },
                length : state.length + 1,
                total : state.total + price,
                loading : false,
                request : 'fulfilled'
            }
        case Cart_Action_Failure:
            return {
                ...state,
                loading : false,
                request : 'failure'
            }
        case Reduce_Item_From_Cart_Request:
            return {
                ...state,
                loading : true,
                request : 'pending'
            }
        case Reduce_Item_From_Cart_Success:
            return {
                count : {
                    ...count,
                    [category] : {
                        ...count[category],
                        [id] : count[category] ?
                        count[category][id]
                        ?
                        count[category][id] - 1 : 0
                        :
                        0
                    }
                },
                length : state.length - 1,
                total : state.total - price,
                loading : false,
                request : 'fulfilled'
            }
        case Remove_Items_From_Cart_Request:
            return {
                ...state,
                loading : true,
                request : 'pending'
            }
        case Remove_Items_From_Cart_Success:
            return {
                length : state.length - count[category][id],
                total : state.total - count[category][id] * price,
                count : {
                    ...count,
                    [category] : {
                        ...count[category],
                        [id] : 0
                    },
                },
                loading : false,
                request : 'fulfilled'
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);;
    }
}