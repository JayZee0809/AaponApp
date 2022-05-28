import { createContext, useState } from "react";

export const cartContext = createContext({
    count : [],
    setCount : () => null
});

export const CartProvider = ({ children }) => {
    const [ count, setCount ] = useState([]);
    const value = {count,setCount}
    return(
        <cartContext.Provider value={value}>{children}</cartContext.Provider>
    )
}