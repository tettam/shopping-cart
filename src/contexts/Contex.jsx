import { createContext, useState } from "react";
import {PropTypes} from "prop-types"

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([])
  const [loading , setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(true)

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems, 
    setCartItems,
    isCartVisible,
    setIsCartVisible
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

ContextProvider.PropTypes = {
  children: PropTypes.any.isRequired,
}.isRequired