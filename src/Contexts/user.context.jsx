/*
import { createContext, useEffect, useReducer } from "react";
import { User_Login_Failure, User_Login_Success } from "../Actions/Actiontypes";
import { userReducer } from "../Reducers/User/userReducer";
import { createUserDocFromAuth, onAuthStateChangeListener } from "../Utils/Firebase/Firebase.utils";

//  user context AND signin/signout behaviours : 
export const UserContext = createContext({
    currentUser : null,
    setCurrentUser : () => null
});

export const UserProvider = ({ children }) => {
    // const [ currentUser, setCurrentUser ] = useState(null);
    const [state, dispatch ] = useReducer(userReducer);
    const {currentUser} = state;
    const setCurrentUser = (user) => {
        dispatch({ type : User_Login_Success, payload : user});
    }
    const value = { currentUser, setCurrentUser};
    useEffect(() => {
        const unsubscribe = onAuthStateChangeListener(async (user)=> {
            // dispatch({ type : User_Login_Request, ...state});
            try{
                if(user) await createUserDocFromAuth(user);
                setCurrentUser(user);
            }catch(err){
                dispatch({ type : User_Login_Failure});
                console.log(err);
            }
        });
        return unsubscribe;
    },[]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};
*/