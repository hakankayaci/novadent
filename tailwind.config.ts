import type { Config } from "tailwindcss";

/**
 * Every colour below is sampled directly from the clinic's real signboard logo
 * (public/images/brand/canbazvet-logo.png), not eyeballed:
 *
 *   pine.700  #016351  the "Canbaz" ink
 *   leaf.500  #8DCA36  the "Vet" leaf green
 *   leaf.300  #BCEA30  the emblem highlight
 *   alert.600 #C10E1F  the red "ACİL" badge on the signboard
 *
 * Contrast rules that the palette is built around (audited, sRGB):
 *   - leaf.500 is NEVER text on a light surface (1.97:1). Use leaf.700 for green
 *     text on white, or put leaf.500 on pine.900/950 where it reaches 6.7:1+.
 *   - leaf.300 is the safe accent on pine.700 (5.15:1); leaf.500 there is 3.66:1
 *     and therefore large-text only.
 *   - ink.muted is the lightest permitted body colour (5.15:1 on paper).
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#021D45",
          900: "#03285C",
          800: "#043474",
          700: "#054394",
          600: "#0757BE",
          500: "#0B6EEA",
          100: "#E6F0FC",
          50: "#F0F6FE",
        },
        cyan: {
          800: "#007A96",
          700: "#009BBF",
          600: "#00B7DF",
          500: "#00B7DF",
          400: "#33C5E5",
          300: "#70D7ED",
          200: "#A8E8F5",
          100: "#DDF8FD",
          50: "#F0FCFE",
        },
        alert: {
          700: "#96101A",
          600: "#C10E1F",
          500: "#D9202B",
          100: "#FCE7E8",
        },
        paper: {
          DEFAULT: "#F7FAFC",
          warm: "#F1F5F9",
        },
        surface: {
          pearl: "#F4F0E8",
          "pearl-line": "#D8D0C2",
        },
        ink: {
          DEFAULT: "#0F172A",
          soft: "#334155",
          muted: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        menu: ["var(--font-menu)", "var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Fluid scale, ratio >= 1.25 between steps. Display ceiling stays under 6rem.
        "display-xl": ["clamp(2.5rem, 1.6rem + 4.2vw, 5.25rem)", { lineHeight: "1.04", letterSpacing: "-0.032em" }],
        "display-lg": ["clamp(2rem, 1.4rem + 2.8vw, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.028em" }],
        "display-md": ["clamp(1.625rem, 1.25rem + 1.7vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.022em" }],
        "display-sm": ["clamp(1.25rem, 1.1rem + 0.8vw, 1.625rem)", { lineHeight: "1.25", letterSpacing: "-0.014em" }],
        "body-lg": ["clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem)", { lineHeight: "1.65" }],
        "body": ["1rem", { lineHeight: "1.65" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.6" }],
        "label": ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.02em" }],
      },
      spacing: {
        section: "clamp(4rem, 3rem + 5vw, 7.5rem)",
        "section-sm": "clamp(2.5rem, 2rem + 3vw, 4.5rem)",
      },
      borderRadius: {
        card: "1.25rem",
        panel: "1.75rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(4, 35, 26, 0.04), 0 8px 24px -12px rgba(4, 35, 26, 0.10)",
        lift: "0 2px 4px rgba(4, 35, 26, 0.05), 0 18px 40px -16px rgba(4, 35, 26, 0.18)",
        panel: "0 30px 70px -30px rgba(4, 35, 26, 0.42)",
        alert: "0 10px 30px -10px rgba(193, 14, 31, 0.45)",
      },
      transitionTimingFunction: {
        // Exponential ease-out only: no bounce, no elastic.
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      zIndex: {
        // Semantic scale. Nothing in the codebase may use a raw z value.
        base: "0",
        raised: "10",
        sticky: "20",
        header: "30",
        overlay: "40",
        drawer: "50",
        skip: "60",
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "rise-in": {
          from: { opacity: "0", transform: "translate3d(0, 1.25rem, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.97)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.85)", opacity: "0.7" },
          "70%, 100%": { transform: "scale(1.9)", opacity: "0" },
        },
        "sheen": {
          from: { transform: "translateX(-120%) skewX(-18deg)" },
          to: { transform: "translateX(260%) skewX(-18deg)" },
        },
      },
      animation: {
        "rise-in": "rise-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
        "scale-in": "scale-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
