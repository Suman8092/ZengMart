import { FaInstagram, FaFacebookF } from "react-icons/fa"

export default function ComingSoon() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center text-center overflow-hidden">

      {/* Background Glow Effect */}
      <div className="absolute w-[500px] h-[500px] bg-[#D4AF37] opacity-10 blur-[120px] rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-[#D4AF37] opacity-10 blur-[100px] rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

      <div className="relative max-w-2xl px-6">

        <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-wide mb-6">
          <span className="text-[#D4AF37] drop-shadow-lg">Zeng</span>Mart
        </h1>

        <h2 className="text-3xl md:text-4xl text-white font-semibold mb-6">
          Launching Soon
        </h2>

        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          We're building something bold, premium & next-level.  
          Stay tuned for exclusive collections and unbeatable deals.
        </p>


        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://www.instagram.com/zengmart?igsh=bWpnYW15cWg5Mzdw"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-600 text-white hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://www.facebook.com/share/187UDQ2Nj9/"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-600 text-white hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
          >
            <FaFacebookF size={20} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-gray-500 text-sm mt-12 tracking-wide">
          © {new Date().getFullYear()} ZengMart. All rights reserved.
        </p>

      </div>
    </div>
  )
}
