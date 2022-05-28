import { ProductCard } from "../Cards/Product-Card";
import './product-card.styles.scss';

export const Shop = ({products}) => {
    return (
        <div className="products-container">
            {products.map(product => <ProductCard product={product}/>)}
        </div>
    );
}