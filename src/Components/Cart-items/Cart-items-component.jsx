import { useContext } from 'react';
import { cartContext } from '../../Contexts/cart-items.context';
import './cart-item.styles.scss';


export const CartItems = ({product,title}) => {
    const { id, imageUrl, name, price } = product;
    const { cartState } = useContext(cartContext), { count } = cartState;
    const itemCount = count[title] ? count[title][id] : 0;
    return (
        <div className="cart-item-container">
            <img alt={name} src={imageUrl}/>
            <div className="item-details">
                <p className="name">{name}</p>
                <div>{itemCount + ' x ₹' + Math.floor(price / 2.18 * 77.59)}</div>
            </div>
        </div>
    )
}