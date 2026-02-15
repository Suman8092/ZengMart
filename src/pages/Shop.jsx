import products from "../data/products"
import ProductCard from "../components/product/ProductCard"

export default function Shop() {
  return (
    <section className="bg-bgMain py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        <h1 className="text-3xl font-bold text-textMain mb-10 text-center">
          Shop Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
