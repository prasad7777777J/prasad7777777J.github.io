import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      colors: {
        background: "#0A0A0A",
        surface: "#111111",
        border: "#1E1E1E",
        "border-bright": "#2E2E2E",
        text: {
          primary: "#F0EDE8",
          secondary: "#8A8680",
          muted: "#3E3C3A",
        },
        accent: {
          lime: "#D4FF4D",
          red: "#FF3B2F",
          blue: "#3B82F6",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(212, 255, 77, 0.15)",
        "glow-red": "0 0 40px rgba(255, 59, 47, 0.15)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.4)",
        "glass-hover": "0 16px 48px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(212, 255, 77, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
