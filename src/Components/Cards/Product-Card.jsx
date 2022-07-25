import { useDispatch, useSelector } from "react-redux";
import { setIncreasedCount } from "../../Store/Actions/cart.action";
import { cartSelector } from "../../Store/selectors/cart.selector";
import Button from "../Button-Component/Button";
import { ProductCountBar } from "../Product-count-bar.jsx/Product-Count-Bar";

export const ProductCard = ({product , title}) => {
    const dispatch = useDispatch();
    const { id, name, imageUrl, price } = product;
    const cartState = useSelector(cartSelector);
    const value = cartState.count[title] ? cartState.count[title][id] : 0;
    // const addProduct = {
    //     ...count[title],
    //     [id] : (value ? value + 1 : 1)
    // }
    const clickHandler = (e) => {
        console.log('from child');
        e.isPropagationStopped = () => true;
        dispatch(setIncreasedCount(
            {
                state : cartState,
                payload : [
                    title, e.target.value,
                    Math.floor(price / 2.18 * 77.59)
                ]
            }
        ));
    }
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} id={id} value= {id} title={title} />
            {(value > 0) && <ProductCountBar title={title} product={product}/>}
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{Math.floor(price / 2.18 * 77.59)}/-</span>
            </div>
            <Button buttontype='inverted' onClick={clickHandler} title={title} price={price} value={ id }>Add to cart</Button>
        </div>
    )
}