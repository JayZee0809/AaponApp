import { useSelector } from "react-redux";
import { cartSelector } from "../../Store/selectors/cart.selector";
import { categoriesSelector } from "../../Store/selectors/category.selector";

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
    const cartState = useSelector(cartSelector);
    const categories = useSelector(categoriesSelector);
    const { count, total } = cartState;
    if(!total) return <div className='empty-items'><h3>Cart is Empty!</h3></div>
    
    const categoryList = Object.keys(count);
    return (
        categoryList.map(category => (
            count[category] >= 0 ? null : (
                Object.keys(count[category]).map(id => {
                    if(!count[category][id]) return null;
                    const product = binarySearch(categories[category],Number(id));
                    return <Component key={id} title={category} product={product} />
                })
            )
        ))
    );
}
