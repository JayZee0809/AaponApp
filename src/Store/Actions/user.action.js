import { createAction } from "../../Utils/Reducers/reducer.utils";
import { User_Login_Success, User_Logout_Success } from "./actions.types";

export const setCurrentUser = (user) => 
    user ? createAction(User_Login_Success, user) : createAction(User_Logout_Success);