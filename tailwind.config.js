/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,css}", "./components/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "8rem",
        "11xl": "9rem",
        "12xl": "10rem",
      },
    },
  },
  plugins: [],
}
