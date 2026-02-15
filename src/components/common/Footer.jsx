export default function Footer() {
  return (
    <footer className="bg-bgSection border-t border-borderDark mt-20">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-gold">
            ZengMart
          </h3>
          <p className="mt-3 text-textMuted text-sm">
            Curating premium products for a modern lifestyle.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-textMain font-semibold mb-4">
            Shop
          </h4>
          <ul className="space-y-2 text-textPara text-sm">
            <li className="hover:text-gold cursor-pointer">Electronics</li>
            <li className="hover:text-gold cursor-pointer">Fashion</li>
            <li className="hover:text-gold cursor-pointer">Accessories</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-textMain font-semibold mb-4">
            Support
          </h4>
          <ul className="space-y-2 text-textPara text-sm">
            <li className="hover:text-gold cursor-pointer">FAQ</li>
            <li className="hover:text-gold cursor-pointer">Shipping</li>
            <li className="hover:text-gold cursor-pointer">Returns</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-borderDark py-6 text-center text-sm text-textMuted">
        © {new Date().getFullYear()} ZengMart. All rights reserved.
      </div>
    </footer>
  )
}
