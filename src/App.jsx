import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Admin } from "./Admin";
import { ProductDetails } from "./ProductDetails";
import { AddItem } from "./AddItem";
import toast, { Toaster } from "react-hot-toast";
import { CartContext } from "../global/CartContext";
import { Cart } from "./Cart";
function App() {
  return (
    <CartContext>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/admin/addItem" element={<AddItem />} />
      </Routes>
      <Toaster />
    </CartContext>
  );
}

export default App;
