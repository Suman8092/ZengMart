import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import CartDrawer from "../components/cart/CartDrawer"
import MobileBottomNav from "../components/common/MobileBottomNav"

/**
 * MainLayout
 * Global layout wrapper for all pages
 */
export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-bgMain text-textPara">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />
      <MobileBottomNav />


      {/* Cart Drawer (Global) */}
      <CartDrawer />
    </div>
  )
}
