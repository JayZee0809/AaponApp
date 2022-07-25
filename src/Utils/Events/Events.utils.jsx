import { useSelector } from "react-redux";
import { setIncreasedCount } from "../../Store/Actions/cart.action";
import { cartSelector } from "../../Store/selectors/cart.selector";


export const onClickRedirect = (e) => {
    const { value, title } = e.target.attributes;
    console.log('from parent',value?value.value:value);
    if(value) window.location.href += '/' + title.value + '/' + value.value;
};


export const OnButtonClick = (e) => {
    const cartState = useSelector(cartSelector);
    const { target } = e, {value, attributes} = target, { title, price } = attributes;
    if(target.className === 'button-container inverted'){
        setIncreasedCount(
            {
                state : cartState,
                payload : [
                    title, value,
                    Math.floor(price / 2.18 * 77.59)
                ]
            }
        );
    }
    e.isPropagationStopped = () => true;
}