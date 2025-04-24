import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Home from "../src/Home/Home.jsx";
import Shop from "../src/Shop/Shop.jsx";
import Cart from "../src/Cart/Cart.jsx";
import { useState, useEffect } from "react";

export default function App() {
  const [apiItems, setApiItems] = useState([]);
  useEffect(() => {
    if (apiItems.length === 0) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setApiItems(json.slice(0, 8)));
    }
  }, [apiItems]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "shop",
      element: <Shop apiItems={apiItems} />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}
