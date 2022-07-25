import { Link } from "react-router-dom";
import { ProductCard } from "../Cards/Product-Card";
import "../Shop/product-card.styles.scss";
import { CategoryPreviewLayer, Preview, Title } from "./category-preview.styles";

export const CategoryPreview = ({title, products}) => {

    return (
        <CategoryPreviewLayer>
            <h2>
                <Link to={'/shop/' + title}>
                    <Title>
                        {title.toUpperCase()}
                    </Title>
                </Link>
            </h2>
                <Preview >
                    {products ? products.filter((_,index) => index < 4)
                        .map(product => <ProductCard key={product.id} product={product} title={title} />) : null}
                </Preview>
        </CategoryPreviewLayer>
    )
}