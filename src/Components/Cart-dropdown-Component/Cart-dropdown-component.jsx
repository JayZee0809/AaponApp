import { useContext } from 'react';
import { cartContext } from '../../Contexts/cart-items.context';
import Button from '../Button-Component/Button';
import { CartItems } from '../Cart-items/Cart-items-component';
import './cart-dropdown.styles.scss';
import { Link } from 'react-router-dom';
import { GetCartItems } from '../../Utils/Cart/Cart.utils';

export const CartDropdownComponent = () => {
    const { count } = useContext(cartContext);
    const { total } = count;
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                <GetCartItems Component={CartItems}/>
            </div>
            <h2>Total : ₹{total}</h2>
            <Link to='/cart'>
                <Button>Go to Cart</Button>
            </Link>
        </div>
    )
}