import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/Home/Home.jsx";
import Shop from "../src/Shop/Shop.jsx";
import Cart from "../src/Cart/Cart.jsx";

export default function App() {
  const [cartArray, setCartArray] = useState([]);

  useEffect(() => {
    console.log("Cart updated:", cartArray); // This will log every time cartArray is updated
  }, [cartArray]);

  const removeItemFromCart = (itemName) => {
    console.log("Removing item:", itemName);

    setCartArray((prevCartArray) => {
      const updatedCart = prevCartArray.filter(
        (item) => item.productName !== itemName
      );
      return updatedCart;
    });
  };

  const removeAllCartItems = () => {
    console.log("All items removed");
    setCartArray([]); // Clear the cart
  };

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "shop",
      element: (
        <Shop
          setCartArray={setCartArray}
          removeItemFromCart={removeItemFromCart}
        />
      ),
    },
    {
      path: "cart",
      element: (
        <Cart
          key={JSON.stringify(cartArray)}
          cartArray={cartArray}
          removeItemFromCart={removeItemFromCart}
          removeAllItems={removeAllCartItems}
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
