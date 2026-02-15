export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
}) {
  const styles = {
    primary:
      "bg-gold text-black hover:bg-goldLight shadow-gold",
    secondary:
      "border border-gold text-gold hover:bg-gold hover:text-black",
    dark:
      "bg-[#1A1A1A] text-gold hover:bg-[#222222]",
  }

  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 rounded-lg font-semibold transition
        ${styles[variant]} ${className}
      `}
    >
      {children}
    </button>
  )
}
