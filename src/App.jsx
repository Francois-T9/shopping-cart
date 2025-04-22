import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Home from "../src/Home/Home.jsx";
import Shop from "../src/Shop/Shop.jsx";
import Cart from "../src/Cart/Cart.jsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "shop",
      element: <Shop />,
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
