/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        beige: "rgba(125, 125, 125)",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.75)",
        darkGray: "#222222",
        white: "#f5f5f5"
      },
      fontFamily: {
        arimo: ["Arimo", "sans-serif"],
        gruppo: ["Gruppo", "sans-serif"],
        diphylleia: ["Diphylleia"],
        opensans: ["Open Sans"],
        grandiflora: ["GRANDIFLORA", "sans-serif"],
      },
      backgroundImage: {
        "stone": "url('/src/assets/stonebg.png')",
        "hanji": "url('/src/assets/hanji.png')",
        "hanji-white" : "url('/src/assets/hanji2.png')",
        "hanji-black" : "url('/src/assets/hanji5.png')",
        "hanji-blue" : "url('/src/assets/hanji7.png')",
      },
      // keyframes: {
      //   turn: {
      //     "0%, 100%": { transform: "rotate(0deg)" },
      //     "11%": { transform: "rotate(-10deg)" },
      //     "40%": { transform: "rotate(-55deg)" },
      //     "66%": { transform: "rotate(35deg)" }
      //   }
      // },
      // animation: {
      //   turn: "turn 600ms ease-in-out"
      // },
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