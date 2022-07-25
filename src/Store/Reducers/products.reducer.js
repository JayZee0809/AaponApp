import { Fetch_Category_Items_Failure, Fetch_Category_Items_Request, Fetch_Category_Items_Success } from "../Actions/actions.types";

const Initial_Products_State = {
    products : []
}

export const productReducer = (state = Initial_Products_State, action) => {
    const { type, payload } = action;
    switch(type){
        case Fetch_Category_Items_Request:
            return {
                ...state,
                isLoading : true,
            }
        case Fetch_Category_Items_Success:
            return {
                ...state,
                products : payload,
                isLoading : false
            }
        case Fetch_Category_Items_Failure:
            return {
                ...state,
                isLoading : false,
                error : payload
            }
        default:
            return state;
    }
}