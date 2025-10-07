import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
export const ProductDetails = () => {
  const params = useParams();
  const [products, setProducts] = useEffect([]);
  useEffect(() => {
    const { id } = useParams();
    fetch(`https://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);
  return (
    <main className="flex flex-wrap gap-5 justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-2xl w-auto  flex-col p-2 "
        >
          <img
            src={product.image}
            alt="image"
            className="w-90 overflow-hidden"
          />
          <p>{product.name}</p>
          <p>Description: {product.descr}</p>
          <p>Price: ${product.price}</p>
          <div className="flex gap-1">
            <Button purpose="addToCart"></Button>{" "}
            <Button purpose="details"></Button>
          </div>
        </div>
      ))}
    </main>
  );
};
