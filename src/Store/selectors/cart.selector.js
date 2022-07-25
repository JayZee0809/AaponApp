import { createSelector } from "reselect";


const selectCartReducer = state => state.cart;
export const cartSelector = createSelector(
    selectCartReducer,
    cart => cart
)