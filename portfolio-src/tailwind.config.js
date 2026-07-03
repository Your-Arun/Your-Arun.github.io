/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0d1117",
        card: "#161b22",
        muted: "#8b949e",
        "text-strong": "#f0f6fc",
        border: "#30363d",
        accent: "#58a6ff",
        "accent-hover": "#79c0ff",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
