import React, { createContext, useState } from "react";
export const CartState = createContext(null);
import { toast } from "react-hot-toast";

export const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  function deleteFromCart(id) {
    let newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
    toast.success("Item removed from cart");
  }
  function addToCart({ product }) {
    if (cart.includes(product)) {
      toast.error("Item already in cart");
      return;
    } else {
      toast.success("Item added to cart");
    }
    console.log(product);
    setCart([...cart, product]);
  }
  console.log(cart);
  return (
    <CartState.Provider value={{ cart, setCart, addToCart, deleteFromCart }}>
      {children}
    </CartState.Provider>
  );
};
