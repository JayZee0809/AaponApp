// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <div className="category-container" key={props.id}>
            <div className="background-image" style={{
                'backgroundImage' : `url(${props.imageUrl})`
            }}/>
            <div className="category-body-container">
                <h2>{props.title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}