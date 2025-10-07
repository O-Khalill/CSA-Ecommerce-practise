import React from "react";
import { Link } from "react-router-dom";
import { CartContext, CartState } from "../../global/CartContext";
import { useContext } from "react";
import { Cart } from "../Cart";
export const Header = () => {
  const { cart } = useContext(CartState);
  return (
    <>
      <div className=" m-5 flex   items-center justify-between">
        <h2 className="text-4xl font-black">eCommerce</h2>

        <nav className="flex gap-4 items-center text-2xl px-9">
          <Link to="./">Home </Link>
          <Link to="./Admin">Admin</Link>
          <Link to="./Cart">Cart:{cart.length}</Link>
        </nav>
      </div>
    </>
  );
};
