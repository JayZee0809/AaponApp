import { useContext } from "react";
import { cartContext } from "../../Contexts/cart-items.context";
import Button from "../Button-Component/Button";
import { ProductCountBar } from "../Product-count-bar.jsx/Product-Count-Bar";

export const ProductCard = ({product , title}) => {
    const { id, name, imageUrl, price } = product;
    const { cartState, setIncreasedCount } = useContext(cartContext), { count } = cartState;
    const value = count[title] ? count[title][id] : 0;
    // const addProduct = {
    //     ...count[title],
    //     [id] : (value ? value + 1 : 1)
    // }
    const clickHandler = () => {
        setIncreasedCount([
            title, id,
            Math.floor(price / 2.18 * 77.59),true
        ]);
    }
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name}/>
            {(value > 0) && <ProductCountBar title={title} product={product}/>}
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{Math.floor(price / 2.18 * 77.59)}/-</span>
            </div>
            <Button buttontype='inverted' onClick={clickHandler} value={ id }>Add to cart</Button>
        </div>
    )
}