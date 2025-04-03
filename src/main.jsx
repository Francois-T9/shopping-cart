import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "../src/Home/Home.jsx";
import Shop from "../src/Shop/Shop.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "shop",
    element: <Shop />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
