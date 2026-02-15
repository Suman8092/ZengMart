import MainLayout from "./layouts/MainLayout"
import AppRoutes from "./routes/AppRoutes"
import "./assets/styles/animations.css"

export default function App() {
  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  )
}
