import { useContext } from "react";
import { cartContext } from "../../Contexts/cart-items.context";
import Products from '../../shop-data.json';



export const GetCartItems = ({Component}) => {   
    const { count } = useContext(cartContext);
    const itemList = Object.keys(count);

    return (
            itemList.map(productID => 
                (Products[productID - 1] && (count[productID] > 0)
                    &&
                <Component key={productID} product={Products[productID - 1]}/>
            ))
    )
}
//  {!total && <div className='empty-items'><h3>Cart is Empty!</h3></div>}