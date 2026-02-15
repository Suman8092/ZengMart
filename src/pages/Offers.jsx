import products from "../data/products"
import ProductCard from "../components/product/ProductCard"

export default function Offers() {
  const saleProducts = products.filter(p => p.discount > 0)

  if (saleProducts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bgMain text-textMuted">
        No active offers right now 💸
      </div>
    )
  }

  return (
    <section className="bg-bgMain py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-textMain mb-10 text-center">
          🔥 Hot Deals & Offers
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {saleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
