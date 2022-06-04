import { useContext } from "react";
import { cartContext } from "../../Contexts/cart-items.context";
import { productContext } from "../../Contexts/products.context";

export const binarySearch = function(array,element,left = 0, right = array.length - 1){
    const mid = Math.floor((right + left)/2);

    if( element === array[right].id ){
        return array[right];
    }

    if( element === array[left].id ){
        return array[left];
    }

    if( mid === left || mid === right ){
        return false;
    }

    if( array[mid].id === element ){
        return array[mid];
    }
    if( array[mid].id < element ){
        return binarySearch(array,element,mid,right);
    }
    return binarySearch(array,element,left,mid);
};

export const GetCartItems = ({Component}) => {   
    const { count } = useContext(cartContext);
    const { products } = useContext(productContext);
    const categoryList = Object.keys(count);
    if(!count.total) return <div className='empty-items'><h3>Cart is Empty!</h3></div>
    return (
        categoryList.map(category => (
            count[category] >= 0 ? null : (
                Object.keys(count[category]).map(id => {
                    if(!count[category][id]) return null;
                    const product = binarySearch(products[category],Number(id));
                    return <Component key={id} title={category} product={product} />
                })
            )
        ))
    )
}
