import Button from '../Button-Component/Button';
import { CartItems } from '../Cart-items/Cart-items-component';
// import './cart-dropdown.styles.scss';
import { Link } from 'react-router-dom';
import { GetCartItems } from '../../Utils/Cart/Cart.utils';
import { useSelector } from 'react-redux';
import { cartSelector } from '../../Store/selectors/cart.selector';
import { CartDropdown, CartItemsDiv } from './cart-dropdown.styles';

export const CartDropdownComponent = () => {
    const cartState = useSelector(cartSelector);
    return (
        <CartDropdown>
            <CartItemsDiv>
                <GetCartItems Component={CartItems}/>
            </CartItemsDiv>
            <h2>Total : ₹{cartState ? cartState.total : 0}</h2>
            <Link to='/cart'>
                <Button>Go to Cart</Button>
            </Link>
        </CartDropdown>
    )
}