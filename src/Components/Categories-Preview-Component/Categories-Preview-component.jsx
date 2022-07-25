import { useSelector } from 'react-redux';
import { categoriesSelector, isCategoryLoadingSelector } from '../../Store/selectors/category.selector';
import { onClickRedirect } from '../../Utils/Events/Events.utils';
import { CategoryPreview } from '../Category-Preview-Component/Category-Preview-component';
import { Loader } from '../Loader/Loader';
// import '../Category-Preview-Component/product-card.styles.scss';

export const CategoriesPreview = () => {
    const categories = useSelector(categoriesSelector);
    const isLoading = useSelector(isCategoryLoadingSelector);
    const titles = Object.keys(categories);
    return (
        <div onClick={onClickRedirect}>
            {isLoading ? <Loader/> : titles.map(title => {
                const products = categories[title];
                return <CategoryPreview key={title} title={title} products={products} />
            })}
        </div>
    );
}