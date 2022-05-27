import { useContext } from "react";
import { productContext } from "../../Contexts/products.context";
import { ProductCard } from "../Cards/Product-Card";
import './product-card.styles.scss';

export const Shop = () => {
    const { products } = useContext(productContext);

    return (
        <div className="products-container">
            {products.map(product => <ProductCard product={product}/>)}
        </div>
    );
}