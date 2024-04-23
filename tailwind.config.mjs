const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      cormier: ["Cormier", "sans-serif"],
      metropolis: ["Metropolis", "sans-serif"],
      valencia: ["Valencia", "sans-serif"],
    },
    extend: {
      colors: {
        dark: "#2B2F2D",
        bright: "#E6E6E6",
        primary: "#BF954A",
        secondary: "#263835",
      },
    },
  },
  plugins: [],
};
