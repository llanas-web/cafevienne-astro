const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      bodoni: ["BodoniModa", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        dark: colors.slate["800"],
        bright: colors.slate["100"],
        primary: colors.emerald["950"],
        secondary: colors.amber["500"],
      },
    },
  },
  plugins: [],
};
