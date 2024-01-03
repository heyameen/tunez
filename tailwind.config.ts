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
          sidebar: "#F2F2F2",
          bg: "#F7F7F7",
          soft: "#D3E1E6",
          body: "#424242",
          titles: "#303030",
          light: "#757575",
        },
        blue: {
          DEFAULT: "#4682B4",
        },
      },
    },
  },
  plugins: [],
};
export default config;
