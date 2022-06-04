import { useContext } from "react"
import { cartContext } from "../../Contexts/cart-items.context"



export const ProductCountBar = ({product, title}) => {
    const { count, setCount } = useContext(cartContext);
    const { id, price } = product;
    const productCount = count[title] ? count[title][id] : 0;

    const removeProduct = {
        ...count[title],
        [id] : (productCount ? productCount - 1 : 0)
    }
    const addProduct = {
        ...count[title],
        [id] : (productCount ? productCount + 1 : 1)
    }

    const removeOnClickHandler = () => {

        setCount({
            ...count,
            [title] : removeProduct,
            length : count.length ? count.length - 1 : 0,
            total : count.total - Math.floor(price / 2.18 * 77.59)
        });
    }
    const addOnClickHandler = () => {

        setCount({
            ...count,
            [title] : addProduct,
            length : count.length + 1,
            total : count.total + Math.floor(price / 2.18 * 77.59)
        });
    }
    return (
        <div className="count-bar-container">
            <span className="count-bar to-point" onClick={removeOnClickHandler}>{'<'}</span>
            <span className="count-bar">{productCount}</span>
            <span className="count-bar to-point" onClick={addOnClickHandler}>{'>'}</span>
        </div>
    )
}