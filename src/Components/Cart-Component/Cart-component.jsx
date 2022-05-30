import { useContext } from "react";
import { cartContext } from "../../Contexts/cart-items.context";
import './checkout-item.styles.scss';

export const CartComponent = ({product}) => {
    const { count, setCount } = useContext(cartContext);
    const { id, name, price, imageUrl } = product;
    const productCount = count[id];
    const clickHandler = () => {
        setCount({
            ...count,
            length : count.length - productCount,
            total : count.total - productCount * Math.floor(price / 2.18 * 77.59),
            [id] : 0,
        });
    }

    const onClickReducer = () => {
        setCount({
            ...count,
            length : count.length - 1,
            total : count.total - Math.floor(price / 2.18 * 77.59),
            [id] : productCount ? productCount - 1 : 0,
        });
    }

    const onClickIncreamenter = () => {
        const value = count[id];
        setCount({
            ...count,
            [id] : (value ? value + 1 : 1),
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
                <span className="value">{count[id]}</span>
                <span className="arrow" onClick={onClickIncreamenter}>{'>'}</span>
            </div>
            <span className='price'>{Math.floor(price / 2.18 * 77.59)}</span>
            <span className='remove-button' onClick={clickHandler}>&#10005;</span>
        </div>
    )
}
