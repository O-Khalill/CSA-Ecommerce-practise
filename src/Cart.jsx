import React, { useContext } from "react";
import { CartState } from "../global/CartContext";
import { Button } from "./components/Button";
import { FaOpencart } from "react-icons/fa";

export const Cart = () => {
  const { cart, deleteFromCart, increaseQT, decreaseQT } =
    useContext(CartState);

  const totalPrice = cart.reduce(
    (acc, product) => parseInt(acc + product.price) * (product.quantity || 1),
    0
  );

  return (
    <div className="h-svh flex flex-col justify-between overflow-hidden">
      <div className="flex-1 overflow-y-auto px-3">
        {cart.map((product) => (
          <div key={product.id} className="flex flex-col">
            <div className="flex justify-around items-center border-2 border-blue-500 rounded-3xl m-3 shadow-2xl p-3 flex-wrap">
              <img
                className="h-24 w-24 object-contain"
                src={product.img}
                alt={product.name}
              />
              <h1 className="font-semibold">{product.name}</h1>
              <button
                onClick={() => decreaseQT(product.id)}
                className="px-3 py-1 border rounded-full hover:bg-gray-300"
              >
                -
              </button>
              <span>Qty: {product.quantity}</span>
              <button
                onClick={() => increaseQT(product.id)}
                className="px-3 py-1 border rounded-full hover:bg-gray-300"
              >
                +
              </button>
              <h1>Qty: {product.quantity || 1}</h1>
              <button>-</button>
              <h2 className="font-semibold">${product.price}</h2>
              <Button
                purpose="delete"
                onClick={() => deleteFromCart(product.id)}
              />
            </div>
          </div>
        ))}
      </div>
      {cart.length != 0 && (
        <div className="border-2 border-blue-500 rounded-3xl shadow-xl m-5 p-5 flex flex-col items-center bg-white shrink-0">
          <FaOpencart size={40} className="text-blue-600 mb-2" />
          <h2 className="text-2xl font-bold">Cart Summary</h2>
          <p className="text-xl mt-2">
            Total:{" "}
            <span className="font-semibold">${totalPrice.toFixed(2)}</span>
          </p>
        </div>
      )}
    </div>
  );
};
