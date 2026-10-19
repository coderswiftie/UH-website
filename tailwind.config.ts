import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#12263A",
          dark: "#0b1825",
        },
        teal: {
          DEFAULT: "#1B7F79",
          deep: "#145C58",
          light: "#229c95",
        },
        offwhite: {
          DEFAULT: "#F7F8F6",
        },
        mint: {
          DEFAULT: "#E8F4F1",
          border: "#D1E7E3",
        },
        ink: {
          DEFAULT: "#17202A",
          muted: "#3B4754",
        },
        slate: {
          DEFAULT: "#52616B",
          light: "#71828D",
        },
        gold: {
          DEFAULT: "#C59B45",
        },
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        card: "14px",
        btn: "11px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(18, 38, 58, 0.05), 0 1px 2px -1px rgba(18, 38, 58, 0.05)",
        card: "0 2px 8px -2px rgba(18, 38, 58, 0.06), 0 1px 4px -1px rgba(18, 38, 58, 0.04)",
        elevated: "0 6px 16px -4px rgba(18, 38, 58, 0.08), 0 2px 6px -2px rgba(18, 38, 58, 0.04)",
      },
      spacing: {
        "section-desktop": "96px",
        "section-mobile": "56px",
      },
    },
  },
  plugins: [],
};

export default config;
