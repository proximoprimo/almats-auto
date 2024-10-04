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
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "var(--secondary)",
      },
      fontFamily: {
        pioneer: "var(--font-ben-pioneer)",
        montserrat: "var(--font-montserrat)",
        "montserrat-alternates": "var(--font-montserrat-alternates)",
      },
    },
  },
  plugins: [],
};
export default config;
