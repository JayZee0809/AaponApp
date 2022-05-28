import { createContext, useState } from "react";

export const dropdownContext = createContext({
    visibility : null,
    setVisibility : () => null,
});

export const DropdownProvider = ({ children }) => {
    const [visibility, setVisibility] = useState(false);
    const value = {visibility,setVisibility}
    return(
        <dropdownContext.Provider value={value}>{children}</dropdownContext.Provider>
    )
}