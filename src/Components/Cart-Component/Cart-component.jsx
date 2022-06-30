import { useContext } from "react";
import { cartContext } from "../../Contexts/cart-items.context";
import './checkout-item.styles.scss';

export const CartComponent = ({product, title}) => {
    const { cartState, setIncreasedCount, setReducedCount, setCountRemoved } = useContext(cartContext), { count } = cartState;
    const { id, name, price, imageUrl } = product;
    const productCount = count[title] ? count[title][id] : 0;
    
    const productDetails = [
        title, id,
        Math.floor(price / 2.18 * 77.59),false
    ]
    const clickHandler = () => {
        setCountRemoved(productDetails);
     }

    const onClickReducer = () => {
        setReducedCount(productDetails);
    }

    const onClickIncreamenter = () => {
        setIncreasedCount(productDetails);
    }
    
    return (
        <div className='cart-item-container'>
            <div className='image-container'>
                <img alt='product' src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <span className="arrow" onClick={onClickReducer}>{'<'}</span>
                <span className="value">{productCount}</span>
                <span className="arrow" onClick={onClickIncreamenter}>{'>'}</span>
            </div>
            <span className='price'>{Math.floor(price / 2.18 * 77.59)}</span>
            <span className='remove-button' onClick={clickHandler}>&#10005;</span>
        </div>
    )
}
