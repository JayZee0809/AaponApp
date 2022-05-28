import { useContext } from "react";
import { cartContext } from "../../Contexts/cart-items.context";
import Button from "../Button-Component/Button";

export const ProductCard = ({product}) => {
    const { id, name, imageUrl, price } = product;
    const { count, setCount } = useContext(cartContext);

    const clickHandler = (event) => {
        const { productID } = event.target.value;
        setCount({
            ...count,
            productID : count[productID] ? count[productID] + 1 : 1,
            length : count.length + 1
        });
    }
    return (
        <div key={id} className="product-card-container">
            <img src={imageUrl} alt={name}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{Math.floor(price / 2.18 * 77.59)}/-</span>
            </div>
            <Button buttontype='inverted' onClick={clickHandler} value={ product }>Add to cart</Button>
        </div>
    )
}