import { Link } from "react-router-dom";
import { ProductCard } from "../Cards/Product-Card";
import "../Shop/product-card.styles.scss";
import "./category-preview.styles.scss";



export const CategoryPreview = ({title, products}) => {
    return (
        <div className="category-preview-container">
            <h2>
                <Link to={'/shop/' + title}>
                    <span className="title">
                        {title.toUpperCase()}
                    </span>
                </Link>
            </h2>
            <div className="preview">
                {products.filter((_,index) => index < 4)
                    .map(product => <ProductCard key={product.id} product={product} title={title} />)}
            </div>
        </div>
    )
}