import Card from '../Components/Card';
// eslint-disable-next-line import/no-anonymous-default-export
export default ({categories}) => {
    return(
        <div className="categories-container">
            {categories.map(category => Card(category,'category-container','category-body-container','background-image'))}
        </div>
    )
}