// router.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Order from "../components/Order";
import ProductCard from "../components/ProductCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductCard />,
  },
  {
    path: "order",
    element: <Order />,
  },
]);

export default router;
