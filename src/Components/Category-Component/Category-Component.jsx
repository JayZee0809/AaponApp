import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { productContext } from "../../Contexts/products.context"
import { ProductCard } from "../Cards/Product-Card";
import './catagory-component.styles.scss'



export const Category = () => {
    const { category } = useParams();
    const { products } = useContext(productContext);
    // const categoryProducts = products[category];
    const [ items, setItems ] = useState(products[category]);
    useEffect(() => {
        setItems(products[category]);
    },[category, products])
    return (
        <div className="products-container">
            {
                items &&
                items.map(product => <ProductCard key={product.id} product={product} title={category} />)}
        </div>
    )
}