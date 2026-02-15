/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        goldLight: "#F2D16B",
        goldDark: "#B8860B",

        bgMain: "#000000",
        bgSection: "#0A0A0A",
        bgCard: "#111111",
        borderDark: "#222222",

        textMain: "#FFFFFF",
        textSub: "#E6E6E6",
        textPara: "#BFC3C7",
        textMuted: "#8C8F91",
      },
    },
  },
  plugins: [],
}
