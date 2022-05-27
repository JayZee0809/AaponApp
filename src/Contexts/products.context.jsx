import { createContext, useState } from 'react';
import Products from '../shop-data.json';

export const productContext = createContext({
    products : [],
    setProducts : () => null
});

export const ProductProvider = ({ children }) => {
    const [ products, setProducts ] = useState(Products);
    const value = { products, setProducts};
    return (
        <productContext.Provider value={value}>{children}</productContext.Provider>
    )
}