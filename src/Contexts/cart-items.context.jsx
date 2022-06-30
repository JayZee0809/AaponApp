import { createContext, useReducer } from "react";
import { Add_To_Cart_Success, Reduce_Item_From_Cart_Success, Remove_Items_From_Cart_Success } from "../Actions/Actiontypes";
import { cartReducer } from "../Reducers/CartReducer";

export const cartContext = createContext({
    cart : {},
    setIncreasedCount : () => null,
    setReducedCount : () => null
});

const Initial_Cart_State = {
    count : {},
    length : 0,
    total : 0
}

export const CartProvider = ({ children }) => {
    // const [ count, setCount ] = useState({length : 0, total : 0});
    const [ cartState, dispatch ] = useReducer(cartReducer, Initial_Cart_State);
    const setIncreasedCount = (itemDetails) => {
        dispatch({ type : Add_To_Cart_Success, payload : itemDetails });
    };
    const setReducedCount = (itemDetails) => {
        dispatch({ type : Reduce_Item_From_Cart_Success, payload : itemDetails });
    };

    const setCountRemoved = (itemDetails) => {
        dispatch({ type : Remove_Items_From_Cart_Success, payload: itemDetails})
    }
    
    const value = {cartState,setIncreasedCount, setReducedCount, setCountRemoved};
    return(
        <cartContext.Provider value={value}>{children}</cartContext.Provider>
    )
}
/*
count : {
    ...categories,
    category : {
        ...productIDs,
        productID : noOfProductsInCartOfThisID
    }
}



*/