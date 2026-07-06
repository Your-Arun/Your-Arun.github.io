/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#06070f",
        card: "#0d1020",
        muted: "#6b7698",
        "text-strong": "#e8eaf6",
        border: "rgba(99, 102, 241, 0.15)",
        accent: "#6366f1",
        "accent-hover": "#818cf8",
        secondary: "#f59e0b",
        "cyan-accent": "#06b6d4",
        "deep": "#030408",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      perspective: {
        '500': '500px',
        '1000': '1000px',
        '1500': '1500px',
      },
    },
  },
  plugins: [],
}

