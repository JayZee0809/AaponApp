import { Route, Routes } from "react-router-dom"
import { CategoriesPreview } from "../Categories-Preview-Component/Categories-Preview-component"
import { Category } from "../Category-Component/Category-Component"


export const Shop = ({categories}) => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview categories={categories} />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}