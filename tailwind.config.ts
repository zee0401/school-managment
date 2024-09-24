import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lamaSky: "#FD9B63",
        lamaSkyLight: "#FD9B63",
        lamaPurple: "#FD9B63",
        lamaPurpleLight: "#F1F0FF",
        lamaYellow: "#C0EBA6",
        lamaYellowLight: "#365E32",
      },
    },
  },
  plugins: [],
};
export default config;
