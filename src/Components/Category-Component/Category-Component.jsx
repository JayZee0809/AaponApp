import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { categoriesSelector } from "../../Store/selectors/category.selector";
import { ProductCard } from "../Cards/Product-Card";
import './catagory-component.styles.scss';

export const Category = () => {
    const { category } = useParams();
    const categories = useSelector(categoriesSelector);
    // const categoryProducts = categories[category];
    const [ items, setItems ] = useState(categories[category]);
    useEffect(() => {
        setItems(categories[category]);
    },[category, categories]);
    return (
        <div className="products-container">
            {
                items &&
                items.map(product => <ProductCard key={product.id} product={product} title={category} />)}
        </div>
    )
}