/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory:          "#FAF9F6",
        ink:            "#1A1A1A",
        ink2:           "#3D3D3D",
        accent:         "#2D6A4F",
        "accent-hover": "#1B4332",
        muted:          "#767676",
        divider:        "#E2DDD6",
        subtle:         "#F0EDE7",
      },
      fontFamily: {
        sans:    ["Inter",         "system-ui", "sans-serif"],
        heading: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1000px",
      },
      letterSpacing: {
        tighter: "-0.04em",
        snug:    "-0.02em",
      },
    },
  },
  plugins: [],
}

