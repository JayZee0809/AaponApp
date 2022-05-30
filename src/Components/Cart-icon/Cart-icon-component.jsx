import { useContext } from 'react';
import { ReactComponent as ShopIcon } from '../../Assets/shopping-bag.svg';
import { cartContext } from '../../Contexts/cart-items.context';
import { dropdownContext } from '../../Contexts/dropdown.context';
import { CartDropdown } from '../Cart-dropdown/Cart-dropdown';
import './cart-icon.styles.scss';

export const CartIcon = () => {
    const { visibility, setVisibility } = useContext(dropdownContext);
    const { count } = useContext(cartContext);
    const clickHandler = () => {
        setVisibility(!visibility);
    }
    return (
        <>
            <div className='cart-icon-container'>
                <ShopIcon className='shopping-icon' onClick={clickHandler}/>
                <span className='item-count' onClick={clickHandler}>{count.length}</span>
            </div>
            <CartDropdown/>
        </>
    )
}