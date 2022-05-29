import { useContext } from "react"
import { cartContext } from "../../Contexts/cart-items.context"



export const ProductCountBar = ({product, incrementHandler}) => {
    const { count, setCount } = useContext(cartContext);
    const { id, price } = product;
    const productCount = count[id];
    const clickHandler = () => {
        setCount({
            ...count,
            [id] : (productCount ? productCount - 1 : 0),
            length : count.length - 1,
            total : count.total - Math.floor(price / 2.18 * 77.59)
        });
    }

    return (
        <div className="count-bar-container">
            <span className="count-bar to-point" onClick={clickHandler}>{'<'}</span>
            <span className="count-bar">{productCount}</span>
            <span className="count-bar to-point" onClick={incrementHandler}>{'>'}</span>
        </div>
    )
}