import { createContext, useEffect, useState } from 'react';
import { getCategoriesAndDocs } from '../Utils/Firebase/Firebase.utils.js';

export const productContext = createContext({
    products : {},
    setProducts : () => null
});

export const ProductProvider = ({ children }) => {
    const [ products, setProducts ] = useState({});
    useEffect(() => {
        const getCategoryMap = async () => {
            try {
                const categoryMap = await getCategoriesAndDocs();
                setProducts(categoryMap);
            }catch(err){
                console.log(err.message);
            }
        };
        getCategoryMap();
    },[]);
    const value = { products, setProducts};
    return (
        <productContext.Provider value={value}>{children}</productContext.Provider>
    )
}