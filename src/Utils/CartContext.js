// src/context/CartContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create Context
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Load counts from local storage (if available)
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart-list')) || [];
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist-list')) || [];
    setCartCount(storedCart.length);
    setWishlistCount(storedWishlist.length);
  }, []);

  // Add item to cart and update local storage
  const addToCart = (id) => {
    const cartList = JSON.parse(localStorage.getItem('cart-list')) || [];
    if (!cartList.includes(id)) {
      cartList.push(id);
      localStorage.setItem('cart-list', JSON.stringify(cartList));
      setCartCount(cartList.length);
    }
  };

  // Add item to wishlist and update local storage
  const addToWishlist = (id) => {
    const wishlistList = JSON.parse(localStorage.getItem('wishlist-list')) || [];
    if (!wishlistList.includes(id)) {
      wishlistList.push(id);
      localStorage.setItem('wishlist-list', JSON.stringify(wishlistList));
      setWishlistCount(wishlistList.length);
    }
  };

  // Reset cart after purchase
  const clearCart = () => {
    localStorage.removeItem('cart-list');
    setCartCount(0);
  };

  return (
    <CartContext.Provider value={{ cartCount, wishlistCount, addToCart, addToWishlist, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
export{}
