import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        pri: "#2D6DED",
        pri_100: "#F7F7FF",
        sec: "#876AFE",
        ter: "#FFBC02",
        bg_pri_light: "#F6F6F6",
        bg_pri_dark: "#0C0C0C",
        border_gray: "#E3E3E3",
        text_black: "#121212",
        text_white: "#CCCCCC",
        credit: "#4EEA7A",
        debit: "#D62C2C",
        text_gray: "#A8A8A8",
      },
    },
  },

  variants: {
    extend: {
      backgroundColor: {
        light: "#F6F6F6",
        dark: "#0C0C0C",
      },
      textColor: {},
    },
  },

  plugins: [],
};
export default config;
