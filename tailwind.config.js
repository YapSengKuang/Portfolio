/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#E1ECC8",
        secondary: "#A0C49D",
        tertiary: "#C4D7B2",
        "black-100": "#193e5b",
        "black-200": "#e9edc9",
        "white-100": "#F7FFE5",
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