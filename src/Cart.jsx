import React, { useContext } from "react";
import { CartState } from "../global/CartContext";
import { Button } from "./components/Button";
export const Cart = () => {
  const { cart, deleteFromCart } = useContext(CartState);

  console.log(cart);
  return (
    <div>
      {cart.map((product) => (
        <div className="flex flex-start flex-col flex-wrap " key={product.id}>
          <div className="flex justify-around items-center border-2 border-blue-500 w-3xl rounded-3xl m-3 shadow-2xl">
            <img className="h-30 w-50" src={product.img} alt="image" />
            <h1>{product.name}</h1>
            <h1>quantity:</h1>
            <h2>${product.price}</h2>
            <Button
              purpose="delete"
              onClick={() => {
                deleteFromCart(product.id);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
