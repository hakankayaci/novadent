import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#06172E",
          900: "#0A2342",
          800: "#10325A",
          700: "#1A4774",
          100: "#DDE8F2",
          50: "#F0F5F9",
        },
        aqua: {
          700: "#007E9A",
          600: "#009DBA",
          500: "#08B7D3",
          400: "#39C9DF",
          200: "#A5E7F0",
          100: "#DDF7FA",
          50: "#F1FCFD",
        },
        porcelain: {
          DEFAULT: "#F8F6F1",
          50: "#FCFBF8",
          100: "#F3EFE7",
          200: "#E4DDD0",
        },
        mist: "#E8F1F3",
        gold: "#F4B400",
        copy: {
          DEFAULT: "#142033",
          soft: "#475569",
          muted: "#64748B",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        sans: ["var(--font-commissioner)", "Arial", "sans-serif"],
      },
      fontSize: {
        hero: [
          "clamp(2.5rem, 1.75rem + 3.4vw, 5.35rem)",
          { lineHeight: "0.98", letterSpacing: "-0.035em" },
        ],
        display: [
          "clamp(2rem, 1.45rem + 2.25vw, 3.85rem)",
          { lineHeight: "1.04", letterSpacing: "-0.03em" },
        ],
        title: [
          "clamp(1.5rem, 1.25rem + 1.15vw, 2.35rem)",
          { lineHeight: "1.12", letterSpacing: "-0.022em" },
        ],
        lead: ["clamp(1.05rem, 0.98rem + 0.3vw, 1.2rem)", { lineHeight: "1.65" }],
      },
      maxWidth: {
        page: "86rem",
        prose: "72ch",
      },
      spacing: {
        section: "clamp(4rem, 3rem + 4vw, 7rem)",
      },
      borderRadius: {
        surface: "1rem",
        panel: "1.5rem",
      },
      boxShadow: {
        surface: "0 12px 36px -24px rgba(6, 23, 46, 0.32)",
        lift: "0 24px 64px -32px rgba(6, 23, 46, 0.42)",
        header: "0 12px 30px -26px rgba(6, 23, 46, 0.45)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      zIndex: {
        sticky: "30",
        overlay: "40",
        drawer: "50",
        skip: "60",
      },
    },
  },
  plugins: [],
};

export default config;
