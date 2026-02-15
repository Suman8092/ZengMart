import { createContext, useContext, useState } from "react"

const ToastContext = createContext()

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null)

  const showToast = (message) => {
    setToast(message)
    setTimeout(() => setToast(null), 2500)
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {toast && (
        <div className="fixed bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 bg-bgCard border border-gold text-textMain px-6 py-3 rounded-lg shadow-gold z-[9999]">
          {toast}
        </div>
      )}
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)
