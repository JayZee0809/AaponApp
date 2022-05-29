import { useContext } from 'react';
import { cartContext } from '../../Contexts/cart-items.context';
import Button from '../Button-Component/Button';
import { CartItems } from '../Cart-items/Cart-items-component';
import './cart-dropdown.styles.scss';
import Products from '../../shop-data.json';

export const CartComponent = () => {
    const { count } = useContext(cartContext);
    const itemList = Object.keys(count);
    const { total } = count;
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {itemList.map(productID => 
                    (Products[productID - 1] && (count[productID] > 0)
                        &&
                    <CartItems key={productID} product={Products[productID - 1]}/>
                    ))
                }
                {!total && <div className='empty-items'><h3>Cart is Empty!</h3></div>}
            </div>
            <h2>Total : ₹{total}</h2>
            <Button>Go to Cart</Button>
        </div>
    )
}