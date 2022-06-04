import { useContext } from "react";
import { Shop } from "../../Components/Shop/Shop";
import { productContext } from "../../Contexts/products.context";

export const ShoppingPage = () => {
    const { products } = useContext(productContext);

    return (
        <Shop categories={products}/>
    )
}