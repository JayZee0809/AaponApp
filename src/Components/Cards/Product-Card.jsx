import Button from "../Button-Component/Button";

export const ProductCard = ({product}) => {
    const { name, imageUrl, price } = product;
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{Math.floor(price / 2.18 * 77.59)}/-</span>
            </div>
            <Button buttontype='inverted'>Add to cart</Button>
        </div>
    )
}