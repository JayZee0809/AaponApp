import Button from '../Button-Component/Button';
import './cart-dropdown.styles.scss';

export const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'/>
            <Button>Go to Cart</Button>
        </div>
    )
}