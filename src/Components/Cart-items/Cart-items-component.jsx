import { useContext } from 'react';
import { cartContext } from '../../Contexts/cart-items.context';
import './cart-item.styles.scss';


export const CartItems = ({product}) => {
    const { id, imageUrl, name, price } = product;
    const { count } = useContext(cartContext);
    const itemCount = count[id];
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