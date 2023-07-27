/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        beige: "rgba(255, 255, 255, 0.7)",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.75)",
        darkGray: "#222222",
        white: "#f5f5f5"
      },
      fontFamily: {
        arimo: ["Arimo", "sans-serif"],
        gruppo: ["Gruppo", "sans-serif"],
      },
      backgroundImage: {
        "stone": "url('/src/assets/stonebg.png')",
        "hanji": "url('src/assets/hanji.png')"
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};