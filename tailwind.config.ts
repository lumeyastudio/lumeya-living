import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "sans-serif"],
      },
      colors: {
        bg: {
          light: "#FAFAF8",
          dark: "#050505",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#0F1115",
        },
        accent: {
          DEFAULT: "#2F855A",
          dark: "#4ADE80",
          glow: "#22C55E",
        },
        secondary: "#6EE7B7",
      },
      animation: {
        "aurora": "aurora 8s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        "counter": "counter 2s ease-out forwards",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        aurora: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
