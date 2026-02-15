import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bgMain text-center px-4">
      <h1 className="text-6xl font-bold text-gold">404</h1>

      <p className="mt-4 text-textMuted">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-8 bg-gold text-black px-8 py-3 rounded-lg font-semibold hover:bg-goldLight transition"
      >
        Go Home
      </Link>
    </div>
  )
}
