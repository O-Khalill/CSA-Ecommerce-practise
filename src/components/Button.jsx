import React from "react";

export const Button = ({ purpose, onClick }) => {
  return (
    <div>
      {purpose === "delete" ? (
        <button
          onClick={onClick}
          className="bg-red-500 rounded-2xl border p-3  text-white hover:scale-95 "
        >
          Delete
        </button>
      ) : null}
      {purpose === "edit" ? (
        <button className="bg-yellow-500 rounded-2xl border p-3 px-5  text-white hover:scale-95">
          Edit
        </button>
      ) : null}
      {purpose === "addToCart" ? (
        <button
          onClick={onClick}
          className="bg-blue-500 rounded-2xl border p-3  text-white hover:scale-95"
        >
          Add to cart
        </button>
      ) : null}
      {purpose === "details" ? (
        <button className="bg-blue-900 rounded-2xl border p-3 text-white hover:scale-95">
          details
        </button>
      ) : null}
      {purpose === "AddItem" ? (
        <button className="bg-green-500 rounded-2xl border p-3  text-white hover:scale-95 ">
          Add item
        </button>
      ) : null}
    </div>
  );
};
