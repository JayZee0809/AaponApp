import { createContext, useState, useEffect } from "react";
import { createUserDocFromAuth, onAuthStateChangeListener } from "../Utils/Firebase/Firebase.utils";

export const UserContext = createContext({
    currentUser : null,
    setCurrentUser : () => null
});

export const UserProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState(null);
    const value = { currentUser, setCurrentUser};

    useEffect(() => {
        const unsubscribe = onAuthStateChangeListener(async (user)=> {
            try{
                if(user) await createUserDocFromAuth(user);
                setCurrentUser(user);
            }catch(err){
                console.log(err);
            }
        });
        return unsubscribe;
    },[]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};