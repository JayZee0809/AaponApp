import { useContext } from "react";
import { cartContext } from "../../Contexts/cart-items.context";
import './checkout-item.styles.scss';

export const CartComponent = ({product, title}) => {
    const { count, setCount } = useContext(cartContext);
    const { id, name, price, imageUrl } = product;
    const productCount = count[title] ? count[title][id] : 0;

    const addProduct = {
        ...count[title],
        [id] : (productCount ? productCount + 1 : 1)
    }
    const removeProduct = {
        ...count[title],
        [id] : (productCount ? productCount - 1 : 0)
    }
    const removeBatch = {
        ...count[title],
        [id] : 0
    }
    const clickHandler = () => {
        setCount({
            ...count,
            length : count.length - productCount,
            total : count.total - productCount * Math.floor(price / 2.18 * 77.59),
            [title] : removeBatch
        });
    }

    const onClickReducer = () => {
        setCount({
            ...count,
            length : count.length - 1,
            total : count.total - Math.floor(price / 2.18 * 77.59),
            [title] : removeProduct
        });
    }

    const onClickIncreamenter = () => {
        setCount({
            ...count,
            [title] : addProduct,
            length : count.length + 1,
            total : count.total + Math.floor(price / 2.18 * 77.59)
        });
    }
    
    return (
        <div className='cart-item-container'>
            <div className='image-container'>
                <img alt='product' src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <span className="arrow" onClick={onClickReducer}>{'<'}</span>
                <span className="value">{productCount}</span>
                <span className="arrow" onClick={onClickIncreamenter}>{'>'}</span>
            </div>
            <span className='price'>{Math.floor(price / 2.18 * 77.59)}</span>
            <span className='remove-button' onClick={clickHandler}>&#10005;</span>
        </div>
    )
}
