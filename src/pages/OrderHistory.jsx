import { useOrders } from "../context/OrderContext"

export default function OrderHistory() {
  const { orders } = useOrders()

  if (orders.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bgMain text-textMuted">
        No orders placed yet 📦
      </div>
    )
  }

  return (
    <section className="bg-bgMain py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-textMain mb-10">
          Order History
        </h1>

        <div className="space-y-6">
          {orders.map(order => (
            <div
              key={order.id}
              className="bg-bgCard border border-borderDark rounded-xl p-6"
            >
              <div className="flex justify-between text-sm text-textMuted mb-4">
                <span>Order #{order.id}</span>
                <span>{order.date}</span>
              </div>

              <ul className="text-textPara text-sm space-y-1">
                {order.items.map(item => (
                  <li key={item.id}>
                    {item.name} × {item.qty}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center mt-4">
                <span className="text-gold font-semibold">
                  ₹{order.total}
                </span>

                <span className="text-xs bg-gold text-black px-3 py-1 rounded-full">
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
