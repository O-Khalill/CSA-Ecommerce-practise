import { Button } from "./components/Button";
import { Link } from "react-router-dom";
import { useProduct } from "./hooks/useProduct";
import { AddItem } from "./AddItem";
import { useContext } from "react";
import { CartState } from "../global/CartContext";
export const Admin = () => {
  const [products, setProducts] = useProduct();
  const { deleteFromCart } = useContext(CartState);
  function handleDelete(id) {
    console.log("I am handleDelete function");
    fetch(`${import.meta.env.VITE_API}/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setProducts(products.filter((product) => product.id !== id));
          console.log("Product deleted successfully");
        } else {
          console.error("Failed to delete product");
        }
      })
      .catch((error) => console.error("Error:", error));
  }
  return (
    <>
      <div className="flex justify-end p-5 px-20">
        <Link to="/Admin/AddItem">
          <Button purpose="AddItem">Add New Item</Button>
        </Link>
      </div>
      <main className="flex flex-wrap gap-5 justify-center ">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-2xl w-auto  flex-col p-2 h-fit shadow-3xl shadow-xl"
          >
            <img
              src={product.img}
              alt="image"
              className="w-90  overflow-hidden"
            />
            <p>{product.name}</p>
            <p>Description: {product.descr}</p>
            <p>Price: ${product.price}</p>
            <div className="flex gap-1">
              <Button
                purpose="delete"
                onClick={() => {
                  handleDelete(product.id);
                  deleteFromCart(product.id);
                }}
              ></Button>{" "}
              <Button purpose="edit">
                <Link to={`/product/${product.id}`}></Link>
              </Button>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};
