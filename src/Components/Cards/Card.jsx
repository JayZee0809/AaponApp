import { Link } from "react-router-dom"

// eslint-disable-next-line import/no-anonymous-default-export
export default (props,outerDiv,innerDiv,img) => {
    return (
        <div className={outerDiv} key={props.id}>
            <div className={img} style={{
                'backgroundImage' : `url(${props.imageUrl})`
            }}/>
            <Link className="link" to={'/shop/'+props.title}>
                <span className={innerDiv}>
                    <h2>{props.title}</h2>
                    <p>Shop Now</p>
                </span>
            </Link>
        </div>
    )
}