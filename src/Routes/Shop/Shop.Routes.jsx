import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Shop } from "../../Components/Shop/Shop";
import { fetchProductsAsync } from "../../Store/Actions/products.action";

export const ShoppingPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductsAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <Shop/>
    )
}