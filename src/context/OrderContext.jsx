import { createContext, useContext, useEffect, useState } from "react"

const OrderContext = createContext()

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    const stored = localStorage.getItem("orders")
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders))
  }, [orders])

  const addOrder = (order) => {
    setOrders(prev => [order, ...prev])
  }

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

export const useOrders = () => useContext(OrderContext)
