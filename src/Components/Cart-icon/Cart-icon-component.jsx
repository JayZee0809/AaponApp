import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as ShopIcon } from '../../Assets/shopping-bag.svg';
import { dropdownContext } from '../../Contexts/dropdown.context';
import { cartSelector } from '../../Store/selectors/cart.selector';
import { CartDropdown } from '../Cart-dropdown/Cart-dropdown';
import './cart-icon.styles.scss';

export const CartIcon = () => {
    const { visibility, setVisibility } = useContext(dropdownContext);
    const cartState = useSelector(cartSelector);
    const length = cartState ? cartState.length : 0;
    const clickHandler = () => {
        setVisibility(!visibility);
    }
    // console.log(count)
    return (
        <>
            <div className='cart-icon-container'>
                <ShopIcon className='shopping-icon' onClick={clickHandler}/>
                <span className='item-count' onClick={clickHandler}>{length}</span>
            </div>
            <CartDropdown/>
        </>
    )
}