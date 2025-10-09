import React from "react";
import { Link } from "react-router-dom";
import { CartContext, CartState } from "../../global/CartContext";
import { useContext } from "react";
import { Cart } from "../Cart";
import { FaOpencart } from "react-icons/fa";
export const Header = () => {
  const { cart } = useContext(CartState);
  return (
    <>
      <div className=" m-5 flex   items-center justify-between">
        <h2 className="text-4xl font-black">eCommerce</h2>

        <nav className="flex gap-4 items-center text-2xl px-9">
          <Link to="./">Home </Link>
          <Link to="./Admin">Admin</Link>
          <Link to="./Cart" className="relative inline-block">
            <FaOpencart size={32} />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </>
  );
};
