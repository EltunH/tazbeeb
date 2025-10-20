import { createRoot } from "react-dom/client";
import Wishlist from "./Wishlist.jsx";
import "./index.css";
import Basket from "./Basket.jsx";

const wishlistRoot = document.getElementById("wishlist-root");
const basketRoot = document.getElementById("basket-root");

if (wishlistRoot) {
  createRoot(wishlistRoot).render(<Wishlist />);
}

if (basketRoot) {
  createRoot(basketRoot).render(<Basket />);
}
