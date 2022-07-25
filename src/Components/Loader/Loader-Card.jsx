import { CategoryPreviewLayer, Preview } from "../Category-Preview-Component/category-preview.styles";

const helperArray = new Array(4).fill(0);
export const DummyCategoryLoader = () => {
    return (
        <CategoryPreviewLayer>
        <span className='animated-bg animated-bg-text'>&nbsp;</span>
        <Preview>
        {helperArray.map(_ => <div className="product-card-container animated-bg" />)}
        </Preview>
        </CategoryPreviewLayer>
    )
}