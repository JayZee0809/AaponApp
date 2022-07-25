import { Route, Routes } from "react-router-dom"
import { CategoriesPreview } from "../Categories-Preview-Component/Categories-Preview-component"
import { Category } from "../Category-Component/Category-Component"


export const Shop = () => {
    // const categories = products.reduce((acc,category) => {
    //     const { title, items} = category;
    //     acc[title.toLowerCase()] = items;
    //     return acc;
    // },{});
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}