import React, { useContext, useEffect, useState } from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Link } from "react-router-dom";
import { useProduct } from "./hooks/useProduct";
import { CartState } from "../global/CartContext";

export const Home = () => {
  const [products] = useProduct();
  const { addToCart } = useContext(CartState);
  const { cart, setCart } = useContext(CartState);

  return (
    <main className="flex flex-wrap gap-5 justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-2xl w-auto  flex-col p-2 shadow-3xl shadow-xl my-22 "
        >
          <img src={product.img} alt="image" className="w-90 overflow-hidden" />
          <p>{product.name}</p>
          <p>Description: {product.descr}</p>
          <p>Price: ${product.price}</p>
          <div className="flex gap-1">
            <Button
              purpose="addToCart"
              onClick={() => addToCart({ product })}
            ></Button>{" "}
            <Button purpose="details">
              <Link to={`/product/${product.id}`}></Link>
            </Button>
          </div>
        </div>
      ))}
    </main>
  );
};
