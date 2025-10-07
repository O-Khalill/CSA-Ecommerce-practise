import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export const AddItem = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setID] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  console.log("i am addItem");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || desc === "" || price === "" || img === "") {
      toast.error("Please fill all the fields");
      return;
    }

    fetch(import.meta.env.VITE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, descr: desc, price, img: img }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        toast.success("Product added successfully");
        setName("");
        setDesc("");
        setID("");
        setPrice("");
        setImg("");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col justify-center items-center max-h-screen p-4  ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-md border-2 border-blue-500 rounded-lg shadow-2xl shadow-blue-950 bg-white p-6 gap-4"
        >
          <label htmlFor="name" className="font-bold text-xl py-2">
            Product name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border-2 border-blue-500 rounded-lg focus:outline-none focus:border-blue-700"
          />

          <label htmlFor="description" className="font-bold text-xl py-2">
            Product Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="p-2 border-2 border-blue-500 rounded-lg focus:outline-none focus:border-blue-700"
          />

          <label htmlFor="price" className="font-bold text-xl py-2">
            Product price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-2 border-2 border-blue-500 rounded-lg focus:outline-none focus:border-blue-700"
          />

          <label htmlFor="image" className="font-bold text-xl py-2">
            Product image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="p-2 border-2 border-blue-500 rounded-lg focus:outline-none focus:border-blue-700"
          />

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="p-3 bg-blue-500 text-white font-bold rounded-lg w-40 hover:bg-blue-600 transition-colors"
            >
              Add product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
