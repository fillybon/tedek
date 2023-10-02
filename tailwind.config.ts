import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "rich-black": "rgb(1, 22, 39)",
        "steel-blue": "rgb(77, 126, 168)",
        "timber-wolf": "rgb(209, 209, 209)",
        platinum: "rgb(219, 219, 219)",
        "burnt-sienna": "rgb(238, 108, 77)",
      },
    },
  },
  plugins: [],
};
export default config;
