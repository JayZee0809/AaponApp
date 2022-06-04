import { CategoryPreview } from '../Category-Preview-Component/Category-Preview-component';
// import '../Category-Preview-Component/product-card.styles.scss';

export const CategoriesPreview = ({categories}) => {
    const titles = Object.keys(categories);
    return (
        <>
            {titles.map(title => {
                const products = categories[title];
                return <CategoryPreview key={title} title={title} products={products} />
            })}
        </>
    );
}