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
        primary: "var(--primary)",
        "bg-secondary-100": "var(--bg-secondary-100)",
        "bg-secondary-200": "var(--bg-secondary-200)",
        "bg-secondary-300": "var(--bg-secondary-300)",
        "bg-primary": "var(--bg-primary)",
        accent: "var(--accent)",
        "text-100": "var(--text-100)",
        "text-200": "var(--text-200)",
        "text-300": "var(--text-300)",
        "text-400": "var(--text-400)",
        "text-500": "var(--text-500)",
        "bg-gradinet": "var(--bg-gradinet)",
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          xl: "1226px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
