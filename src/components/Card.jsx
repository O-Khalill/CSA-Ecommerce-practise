import React from "react";
import { Button } from "./Button";

export const Card = ({ product }) => {
  return (
    <div key={product.id} className="border rounded-2xl w-auto flex-col p-2">
      <img src={product.img} alt="image" className="w-90 overflow-hidden" />
      <p>{product.name}</p>
      <p>Description: {product.descr}</p>
      <p>Price: ${product.price}</p>
      <div className="flex gap-1">
        <Button purpose="addToCart" />
        <Button purpose="details" />
      </div>
    </div>
  );
};
