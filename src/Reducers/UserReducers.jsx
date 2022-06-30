import { User_Login_Failure, User_Login_Request, User_Login_Success, User_Logout_Failure, User_Logout_Request, User_Logout_Success } from "../Actions/Actiontypes";

export const userReducer = (state, action) => {
    console.log('dispatched!',state);
    const {type, payload} = action;
    switch (type) {
        case User_Login_Request:
            return {
                ...state,
                loading : true
            }
        case User_Login_Success:
            return {
                ...state,
                isAuthenticated : true,
                loading : false,
                currentUser : payload
            }
        case User_Login_Failure:
            return {
                ...state,
                error : payload
            }
        case User_Logout_Request:
            return {
                ...state,
                loading : true
            }
        case User_Logout_Success:
            return {
                ...state,
                loading : false,
                currentUser : payload,
                isAuthenticated : false
            }
        case User_Logout_Failure:
            return {
                ...state,
                loading : false,
                error : payload
            }
    
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}