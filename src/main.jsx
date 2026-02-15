import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"

import { CartProvider } from "./context/CartContext"
import { UIProvider } from "./context/UIContext"
import { WishlistProvider } from "./context/WishlistContext"
import { ToastProvider } from "./context/ToastContext"
import { OrderProvider } from "./context/OrderContext"

import "./assets/styles/animations.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <UIProvider>
          <WishlistProvider>
            <CartProvider>
              <OrderProvider>
              <App />
              </OrderProvider>
            </CartProvider>
          </WishlistProvider>
        </UIProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>
)
