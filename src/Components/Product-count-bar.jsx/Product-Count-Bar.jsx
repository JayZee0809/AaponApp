import { useDispatch, useSelector } from "react-redux";
import { setIncreasedCount, setReducedCount } from "../../Store/Actions/cart.action";
import { cartSelector } from "../../Store/selectors/cart.selector";



export const ProductCountBar = ({product, title}) => {
    const dispatch = useDispatch();
    const cartState = useSelector(cartSelector);
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

    const unSubscribeFromParentsClickHandler = (e) => {
        e.isPropagationStopped = () => true;
    }

    const removeOnClickHandler = (e) => {
        // e.isPropagationStopped = () => true;
        dispatch(setReducedCount(
            {
                state : cartState,
                payload : [
                    title, id,
                    Math.floor(price / 2.18 * 77.59)
                ]
            }
        ));
    }
    const addOnClickHandler = (e) => {
        // e.isPropagationStopped = () => true;
        dispatch(setIncreasedCount(
            {
                state : cartState,
                payload : [
                    title, id,
                    Math.floor(price / 2.18 * 77.59)
                ]
            }
        ));
    }
    return (
        <div className="count-bar-container" onClick={unSubscribeFromParentsClickHandler}>
            <span className="count-bar to-point" onClick={removeOnClickHandler}>{'<'}</span>
            <span className="count-bar">{productCount}</span>
            <span className="count-bar to-point" onClick={addOnClickHandler}>{'>'}</span>
        </div>
    )
}