import { Star } from "lucide-react"

export default function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(star => (
        <Star
          key={star}
          size={14}
          className={
            rating >= star
              ? "fill-gold text-gold"
              : "text-borderDark"
          }
        />
      ))}
    </div>
  )
}
