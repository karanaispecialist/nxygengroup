import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nxgen: {
          dark: "#08090D",
          surface: "#10121A",
          card: "#161824",
          border: "rgba(255, 255, 255, 0.08)",
          gold: {
            DEFAULT: "#D4AF37",
            light: "#F5DF88",
            dark: "#AA8012",
            hover: "#E5C058",
          },
          blue: {
            DEFAULT: "#1A6BFF",
            light: "#4D8DFF",
            dark: "#0F4BC2",
            cyan: "#00E5FF",
          },
          crimson: {
            DEFAULT: "#E11D48",
            light: "#FB7185",
            dark: "#9F1239",
          },
          emerald: {
            DEFAULT: "#10B981",
            light: "#34D399",
            dark: "#047857",
          }
        },
      },
      fontFamily: {
        serif: ["Cinzel", "Playfair Display", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gold-gradient": "linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #AA8012 100%)",
        "blue-gradient": "linear-gradient(135deg, #00E5FF 0%, #1A6BFF 50%, #0F4BC2 100%)",
        "luxury-dark": "linear-gradient(180deg, #08090D 0%, #12141F 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 35px -5px rgba(212, 175, 55, 0.3)",
        "blue-glow": "0 0 35px -5px rgba(26, 107, 255, 0.35)",
        "card-hover": "0 20px 40px -15px rgba(0, 0, 0, 0.7)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

