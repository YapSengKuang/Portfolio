/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#17172b",
        secondary: "#6f6bc6",
        tertiary: "#ef44d8",
        "black-100": "#6f6bc6",
        "black-200": "#dda15e",
        "white-100": "#ffffff",
        "cards-100": "#6f6bc6",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #A0C49D",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "",
      },
    },
  },
  plugins: [],
};