import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#FAF7F0",
        dark: "#050315",
        primary: "#2f27ce",
        accent: "#433bff",
      },
    },
  },
  plugins: [],
};
export default config;
