/**
 * formatPrice
 * Converts number to INR format (₹1,299)
 */
export default function formatPrice(value) {
  if (typeof value !== "number") return value

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value)
}
export const getDiscountedPrice = (price, discount) => {
  if (!discount) return price
  return Math.round(price - (price * discount) / 100)
}
