import { createAction } from "../../Utils/Reducers/reducer.utils";
import { Add_To_Cart_Success, Reduce_Item_From_Cart_Success, Remove_Items_From_Cart_Success } from "./actions.types";


const addProduct_payload = (state_and_payload) => {
    const { state, payload } = state_and_payload;
    const { count } = state;
    const [ category, id, price ] = payload;
    const res = {
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
    // console.log(res);
    return res;
}

const reduceProduct_payload = (state_and_payload) => {
    const { state, payload } = state_and_payload;
    const { count } = state;
    const [ category, id, price ] = payload;
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
}

const removeProducts_paylaod = (state_and_payload) => {
    const { state, payload } = state_and_payload;
    const { count } = state;
    const [ category, id, price ] = payload;
    const res = {
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
    // console.log(res);
    return res;
}

export const setIncreasedCount = (itemDetails) => {
    return createAction(Add_To_Cart_Success, addProduct_payload(itemDetails));
};
export const setReducedCount = (itemDetails) => {
    return createAction(Reduce_Item_From_Cart_Success, reduceProduct_payload(itemDetails));
};
export const setCountRemoved = (itemDetails) => {
    return createAction(Remove_Items_From_Cart_Success, removeProducts_paylaod(itemDetails));
}