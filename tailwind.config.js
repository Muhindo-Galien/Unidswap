/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "35em",
        // md: "650px",
        // mobile: { max: "649px" },
        // "min-xl": { max: "1280px" },
        // "min-lg": { max: "1024px" },
        // "min-md": { max: "838px" },
      },
    fontFamily: {
      globalFont: ["Poppins", "sans-serif"],
    },
  },
  },
  plugins: [],
}