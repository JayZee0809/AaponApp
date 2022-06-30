import { useContext } from "react"
import { cartContext } from "../../Contexts/cart-items.context"



export const ProductCountBar = ({product, title}) => {
    const { cartState, setIncreasedCount, setReducedCount } = useContext(cartContext);
    const { count } = cartState;
    const { id, price } = product;
    const productCount = count[title] ? count[title][id] : 0;

    // const removeProduct = {
    //     ...count[title],
    //     [id] : (productCount ? productCount - 1 : 0)
    // }
    // const addProduct = {
    //     ...count[title],
    //     [id] : (productCount ? productCount + 1 : 1)
    // }

    const removeOnClickHandler = () => {

        setReducedCount([
            title, id,
            Math.floor(price / 2.18 * 77.59),false
        ]);
    }
    const addOnClickHandler = () => {

        setIncreasedCount([
            title, id,
            Math.floor(price / 2.18 * 77.59),true
        ]);
    }
    return (
        <div className="count-bar-container">
            <span className="count-bar to-point" onClick={removeOnClickHandler}>{'<'}</span>
            <span className="count-bar">{productCount}</span>
            <span className="count-bar to-point" onClick={addOnClickHandler}>{'>'}</span>
        </div>
    )
}