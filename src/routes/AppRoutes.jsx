import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Shop from "../pages/Shop"
import Product from "../pages/Product"
import Cart from "../pages/Cart"
import NotFound from "../pages/NotFound"
import Checkout from "../pages/Checkout"
import OrderSuccess from "../pages/OrderSuccess"
import Wishlist from "../pages/Wishlist"
import OrderHistory from "../pages/OrderHistory"
import Offers from "../pages/Offers"

/**
 * AppRoutes
 * Central routing configuration
 */
export default function AppRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Shop */}
      <Route path="/shop" element={<Shop />} />

      {/* Product Detail */}
      <Route path="/product/:id" element={<Product />} />

      {/* Cart Page */}
      <Route path="/cart" element={<Cart />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/orders" element={<OrderHistory />} />
      <Route path="/offers" element={<Offers />} />
    </Routes>
  )
}
