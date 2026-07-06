/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#030712",
        card: "#0b0f19",
        muted: "#9ca3af",
        "text-strong": "#f3f4f6",
        border: "rgba(255, 255, 255, 0.08)",
        accent: "#8b5cf6",
        "accent-hover": "#a78bfa",
        secondary: "#ec4899",
        "cyan-accent": "#06b6d4",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
