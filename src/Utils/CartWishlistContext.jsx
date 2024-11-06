
import React, { createContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProductDetails from '../Pages/ProductDetails';

const CartWishlistContext = createContext();

export const CartWishlistProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);

    return (
        <CartWishlistContext.Provider value={{ cartCount, setCartCount, wishlistCount, setWishlistCount }}>
            {children}
            
        </CartWishlistContext.Provider>
    );
};

export default CartWishlistContext;

