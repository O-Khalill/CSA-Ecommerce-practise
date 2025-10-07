import React from "react";
import { useState, useEffect } from "react";

export const useProduct = () => {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(import.meta.env.VITE_API)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return [products, setProducts];
};
