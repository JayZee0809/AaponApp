import { useContext } from "react";
import { cartContext } from "../../Contexts/cart-items.context";
import Button from "../Button-Component/Button";
import { ProductCountBar } from "../Product-count-bar.jsx/Product-Count-Bar";

export const ProductCard = ({product}) => {
    const { id, name, imageUrl, price } = product;
    const { count, setCount } = useContext(cartContext);
    const clickHandler = () => {
        const value = count[id];
        setCount({
            ...count,
            [id] : (value ? value + 1 : 1),
            length : count.length + 1,
            total : count.total + Math.floor(price / 2.18 * 77.59)
        });
    }
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name}/>
            {count[id] > 0 && <ProductCountBar product={product} incrementHandler={clickHandler}/>}
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{Math.floor(price / 2.18 * 77.59)}/-</span>
            </div>
            <Button buttontype='inverted' onClick={clickHandler} value={ id }>Add to cart</Button>
        </div>
    )
}