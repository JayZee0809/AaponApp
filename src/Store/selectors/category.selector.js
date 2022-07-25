import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.products;

const selectCategories = createSelector(
    selectCategoryReducer,
    (products) => products.products
);

export const categoriesSelector = createSelector(
    selectCategories,
    (categories) => categories.reduce((acc,category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    },{})
);

export const isCategoryLoadingSelector = createSelector(
    selectCategoryReducer,
    (categories) => categories.isLoading
);
