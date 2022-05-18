import './button.styles.scss';

const BUTTON_TYPES = {
    google : 'google-sign-in',
    inverted : 'inverted'
}

const Button = ({children, buttontype, ...otherProps}) => {
    return (
        <button className={`button-container ${BUTTON_TYPES[buttontype]}`} {...otherProps}>
            {children}
        </button>
    )
};

export default Button;