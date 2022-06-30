import { createContext, useEffect, useReducer } from "react";
import { User_Login_Failure, User_Login_Success } from "../Actions/Actiontypes";
import { userReducer } from "../Reducers/UserReducers";
import { createUserDocFromAuth, onAuthStateChangeListener } from "../Utils/Firebase/Firebase.utils";

//  user context AND signin/signout behaviours : 
export const UserContext = createContext({
    currentUser : null,
    setCurrentUser : () => null
});

export const Initial_Login_State = {
    currentUser : null,
    isAuthenticated : false,
    loading : false
}

export const UserProvider = ({ children }) => {
    // const [ currentUser, setCurrentUser ] = useState(null);
    const [state, dispatch ] = useReducer(userReducer,Initial_Login_State);
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