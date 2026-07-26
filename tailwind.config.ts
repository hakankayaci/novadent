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
        brand: {
          teal: {
            950: "#00352C",
            900: "#004D40",
            800: "#006654",
            700: "#087565",
            100: "#E0F2EF",
            50: "#F0F9F7",
          },
          lime: {
            500: "#B9D63C",
            400: "#C7E34B",
            300: "#D7EF5E",
            100: "#F3F9D2",
            50: "#F9FCE8",
          },
          red: {
            600: "#E2292E",
            500: "#EF353A",
            100: "#FDE8E8",
          },
          surface: {
            50: "#FAFBF8",
            100: "#F2F6F1",
            blush: "#FBF2F4",
          },
        },
        text: {
          primary: "#0E1F1B",
          secondary: "#4A5F57",
          muted: "#71867E",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0, 53, 44, 0.08)",
        "card-hover": "0 20px 40px -15px rgba(0, 53, 44, 0.14)",
        emergency: "0 8px 25px -5px rgba(226, 41, 46, 0.35)",
        floating: "0 12px 35px -8px rgba(0, 53, 44, 0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
        "pulse-soft": "pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
