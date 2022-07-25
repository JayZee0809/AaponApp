import { CartComponent } from "../../Components/Cart-Component/Cart-component";
import { CartHeader } from "../../Components/Cart-Component/Cart-Header";
import '../../Components/Cart-Component//cart.styles.scss';
import { GetCartItems } from "../../Utils/Cart/Cart.utils";
import { useSelector } from "react-redux";
import { cartSelector } from "../../Store/selectors/cart.selector";


export const Cart = () => {
    const cartState = useSelector(cartSelector), { total } = cartState;
    return (
        <div className="cart-container">
            <CartHeader/>
            <GetCartItems Component={CartComponent}/>
            <div className="total">total: {total}/-</div>
        </div>
    )
}