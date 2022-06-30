import { CartComponent } from "../../Components/Cart-Component/Cart-component";
import { CartHeader } from "../../Components/Cart-Component/Cart-Header";
import '../../Components/Cart-Component//cart.styles.scss';
import { GetCartItems } from "../../Utils/Cart/Cart.utils";
import { useContext } from "react";
import { cartContext } from "../../Contexts/cart-items.context";


export const Cart = () => {
    const { cartState } = useContext(cartContext), {  total } = cartState;
    return (
        <div className="cart-container">
            <CartHeader/>
            <GetCartItems Component={CartComponent}/>
            <div className="total">total: {total}/-</div>
        </div>
    )
}