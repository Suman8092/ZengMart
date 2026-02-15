export default function ProductGallery({ image }) {
  return (
    <div className="bg-bgCard border border-borderDark rounded-xl overflow-hidden">
      <img
        src={image}
        alt="Product"
        className="w-full h-[420px] object-cover"
      />
    </div>
  )
}
