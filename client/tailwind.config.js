const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#27272a",
      rose: "#e11d48",
      yellow: "#fde047",
      grey: "#d6d3d1",
      white: "#ffffff",
      orange: "#f97316",
      green: "#16a34a",
      "fade-yellow": "#fef9c3",
      "fade-blue": "#ede9fe",
      "med-blue": "#60a5fa",
      "dark-blue": "#7c3aed",
      "fade-green": "#3f6212",
    },
    extend: {},
    keyframes: {
      "left-right": {
        "0%": {},
        "100%": { transform: "-translate-y-1/2" },
      },
    },
    animation: {
      "left-to-right": "left-right transition-all duration-500 ease-in-out ",
    },
  },
  plugins: [],
};
