import { Routes, Route } from "react-router-dom";

import { HomePage, ProductsList, ProductDetail, Login, Register, CartPage, OrderPage } from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";


export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="order-summary" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />

      </Routes>
    </>
  )
}
