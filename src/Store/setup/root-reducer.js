import { combineReducers } from "redux";
import { cartReducer } from "../Reducers/CartReducer";
import { locationReducer } from "../Reducers/location.reducer";
// import { cartReducer } from "../Reducers/Cart/CartReducer";
import { productReducer } from "../Reducers/products.reducer";
import { userReducer } from "../Reducers/userReducer";

export const rootReducer = combineReducers({
    user : userReducer,
    products : productReducer,
    cart : cartReducer,
    location : locationReducer
});