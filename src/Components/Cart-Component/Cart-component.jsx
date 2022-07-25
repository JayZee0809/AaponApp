import { useDispatch, useSelector } from "react-redux";
import { setCountRemoved, setIncreasedCount, setReducedCount } from "../../Store/Actions/cart.action";
import { cartSelector } from "../../Store/selectors/cart.selector";
import './checkout-item.styles.scss';

export const CartComponent = ({product, title}) => {
    const dispatch = useDispatch();
    const cartState = useSelector(cartSelector), { count } = cartState;
    const { id, name, price, imageUrl } = product;
    const productCount = count[title] ? count[title][id] : 0;
    
    const productDetails = {
        state : cartState,
        payload : [
            title, id,
            Math.floor(price / 2.18 * 77.59),false
        ]
    };

    const clickHandler = () => {
        dispatch(setCountRemoved(productDetails));
     }

    const onClickReducer = () => {
        dispatch(setReducedCount(productDetails));
    }

    const onClickIncreamenter = () => {
        dispatch(setIncreasedCount(productDetails));
    }
    
    return (
        <div className='cart-item-container'>
            <div className='image-container'>
                <img alt='product' src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <span className="arrow" onClick={onClickReducer}>&#10094;</span>
                <span className="value">{productCount}</span>
                <span className="arrow" onClick={onClickIncreamenter}>&#10095;</span>
            </div>
            <span className='price'>{Math.floor(price / 2.18 * 77.59)}</span>
            <span className='remove-button' onClick={clickHandler}>&#10005;</span>
        </div>
    )
}
