import { getCategoriesAndDocs } from "../../Utils/Firebase/Firebase.utils";
import { createAction } from "../../Utils/Reducers/reducer.utils"
import { Fetch_Category_Items_Failure, Fetch_Category_Items_Request, Fetch_Category_Items_Success } from "./actions.types"

const fetchProductsRequest = () => createAction(
    Fetch_Category_Items_Request
);
const fetchProductsSuccess = (products_payload) => createAction(
    Fetch_Category_Items_Success,
    products_payload
);
const fetchProductsFailure = (error_payload) => createAction(
    Fetch_Category_Items_Failure,
    error_payload
);

export const fetchProductsAsync = () => async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
        const categoryMap = await getCategoriesAndDocs();
        dispatch(fetchProductsSuccess(categoryMap));
    } catch (error) {
        dispatch(fetchProductsFailure(error));
    }
}