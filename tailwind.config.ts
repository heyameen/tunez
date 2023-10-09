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
        grey: {
          DEFAULT: "#3A383F",
          sidebar: "#F2F1F5",
          light: "#A6A6AC",
          bg: "#F9F9F9",
          soft: "#d8d8d8",
        },
        orange: {
          DEFAULT: "#EE732F",
        },
      },
    },
  },
  plugins: [],
};
export default config;
