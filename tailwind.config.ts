import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#1A3C2B",
          dark: "#122B1E",
          light: "#2E5C43",
        },
        gold: {
          DEFAULT: "#C9A96E",
          light: "#E2C99A",
          dark: "#A8864A",
        },
        cream: {
          DEFAULT: "#F7F3EC",
          dark: "#EDE7D9",
          light: "#FDFAF6",
        },
        stone: {
          DEFAULT: "#6B6B5A",
          light: "#9A9A88",
          dark: "#444438",
        },
        earth: {
          DEFAULT: "#8B5E3C",
          dark: "#5D3E28",
          light: "#A67B5B",
        },
        clay: {
          DEFAULT: "#D4A373",
          light: "#E9C46A",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Lato", "Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      letterSpacing: {
        "widest-plus": "0.3em",
        "heritage": "0.15em",
      },
    },
  },
  plugins: [],
};
export default config;
