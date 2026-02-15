import { useState } from "react";
import { FaInstagram, FaFacebookF, FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Yahan hum Formspree ya kisi bhi API ka endpoint daalenge
    const endpoint = "https://formspree.io/f/xzdarjge"; 

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email })
      });

      if (response.ok) {
        setStatus("success");
        setEmail(""); // Input clear kar do
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 z-0"></div>
      <div className="absolute w-[600px] h-[600px] bg-[#D4AF37] opacity-20 blur-[150px] rounded-full top-[-150px] left-[-200px] mix-blend-screen animate-[pulse_6s_ease-in-out_infinite]"></div>
      <div className="absolute w-[500px] h-[500px] bg-[#8B6508] opacity-20 blur-[120px] rounded-full bottom-[-100px] right-[-150px] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite_alternate]"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-3xl p-8 md:p-14 mx-4 backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 cursor-default hover:bg-white/10 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
          </span>
          <span className="text-xs md:text-sm font-medium text-gray-300 tracking-widest uppercase">Opening Soon</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight mb-4">
          <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFF8DC] to-[#D4AF37] text-transparent bg-clip-text drop-shadow-md">
            Zeng
          </span>
          Mart
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-6 tracking-wide">
          Redefining <span className="font-semibold text-white italic">Premium</span> Shopping
        </h2>

        <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          We're building something bold and next-level. Join the exclusive waitlist to get early access and unbeatable launch deals.
        </p>

        {/* Updated Form Handling */}
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center space-y-3 mb-12 animate-fade-in">
            <FaCheckCircle className="text-[#D4AF37] text-4xl" />
            <p className="text-white text-lg font-medium">You're on the list!</p>
            <p className="text-gray-400 text-sm">We'll notify you as soon as we launch.</p>
          </div>
        ) : (
          <form className="relative flex flex-col items-center w-full max-w-md mx-auto mb-12 group" onSubmit={handleSubmit}>
            <div className="relative w-full">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..." 
                className="w-full bg-black/40 border border-white/10 text-white rounded-full py-4 pl-6 pr-36 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all placeholder-gray-500 shadow-inner disabled:opacity-50"
                required
                disabled={status === "loading"}
              />
              <button 
                type="submit" 
                disabled={status === "loading"}
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#D4AF37] hover:bg-[#b5952f] disabled:bg-gray-600 text-black font-semibold rounded-full px-5 flex items-center gap-2 transition-transform active:scale-95 shadow-lg"
              >
                {status === "loading" ? "Sending..." : "Notify Me"} 
                {status !== "loading" && <FaArrowRight size={14} />}
              </button>
            </div>
            {status === "error" && (
              <p className="text-red-400 text-sm mt-3">Oops! Something went wrong. Please try again.</p>
            )}
          </form>
        )}

        {/* Social Icons & Footer... (same as before) */}
        <div className="flex justify-center items-center gap-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent flex-1 max-w-[80px]"></div>
          <a href="https://www.instagram.com/zengmart?igsh=bWpnYW15cWg5Mzdw" target="_blank" rel="noreferrer" className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            <div className="absolute inset-0 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FaInstagram size={20} className="relative z-10" />
          </a>
          <a href="https://www.facebook.com/share/187UDQ2Nj9/" target="_blank" rel="noreferrer" className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            <div className="absolute inset-0 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FaFacebookF size={20} className="relative z-10" />
          </a>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent flex-1 max-w-[80px]"></div>
        </div>

        <p className="text-gray-600 text-xs md:text-sm mt-12 tracking-widest uppercase font-medium">
          © {new Date().getFullYear()} ZengMart. All rights reserved.
        </p>

      </div>
    </div>
  );
}