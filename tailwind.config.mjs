const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      cormier: ["Cormier", "sans-serif"],
      cormorant: ["Cormorant", "sans-serif"],
      metropolis: ["Metropolis", "sans-serif"],
      ornaments: ["Ornaments", "sans-serif"],
      valencia: ["Valencia", "sans-serif"],
      handwriten: ["AlexBrush", "serif"],
    },
    screens: {
      sm: "640px", // 24rem = 4 * 6rem
      md: "768px", // 40rem = 6 * 7rem
      lg: "1024px", // 60rem = 8 * 7.5rem
      xl: "1280px", // 74rem = 12 * 6rem
    },
    container: {
      center: true,
      // screens: {
      //   sm: "368px", // 24rem = 4 * 6rem
      //   md: "672px", // 40rem = 6 * 7rem
      //   lg: "960px", // 60rem = 8 * 7.5rem
      //   xl: "1152px", // 74rem = 12 * 6rem
      // },
    },
    extend: {
      colors: {
        dark: "#2B2F2D",
        bright: "#E6E6E6",
        primary: "#BF954A",
        secondary: "#263835",
      },
      spacing: {
        sm: "32rem",
        md: "48rem",
        lg: "64rem",
        xl: "90rem",
      },
      maxWidth: {
        sm: "32rem",
        md: "48rem",
        lg: "64rem",
        xl: "90rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
