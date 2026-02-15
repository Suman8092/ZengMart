import Button from "../common/Button"

export default function ProductInfo({ product, onAddToCart }) {
  return (
    <div className="space-y-5">
      
      {/* Title */}
      <h1 className="text-3xl font-bold text-textMain">
        {product.name}
      </h1>

      {/* Price */}
      <p className="text-2xl font-bold text-gold">
        ₹{product.price}
      </p>

      {/* Description */}
      <p className="text-textPara text-sm leading-relaxed">
        This premium product is crafted with high-quality materials,
        designed for durability, style, and everyday comfort.
      </p>

      {/* Trust Badges */}
      <ul className="text-textMuted text-sm space-y-1">
        <li>✔ Free Shipping</li>
        <li>✔ Cash on Delivery</li>
        <li>✔ Easy 7-Day Returns</li>
      </ul>

      {/* Buttons */}
      <div className="flex gap-4 pt-4">
        <Button onClick={onAddToCart}>
          Add to Cart
        </Button>

        <Button variant="secondary">
          Buy Now
        </Button>
      </div>
    </div>
  )
}
