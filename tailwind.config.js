/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        base: "32px",
      },
      colors: {
        userDarkBlue: "hsl(240, 38%, 20%)",
        userGrayishBlue: "hsl(240, 18%, 77%)",
      },
      backgroundImage: {
        userContainerBg: "url('/pattern-curve.svg')",
        userPatternBg: "url('/pattern-bg.svg')",
        userQuotesBg: "url('/pattern-quotes.svg')",
      },
    },
  },
  plugins: [],
}