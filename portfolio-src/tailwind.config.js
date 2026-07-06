/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#05080c",
        card: "#0a1017",
        muted: "#64748b",
        "text-strong": "#e2e8f0",
        border: "rgba(16, 185, 129, 0.15)",
        accent: "#10b981",
        "accent-hover": "#34d399",
        secondary: "#06b6d4",
        "cyan-accent": "#06b6d4",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
