import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d0d0d",
        primary: "#00A8E1",
        secondary: "#FF0000",
        muted: "#8a8a8a",
        card: "#1a1a1a",
        border: "#333333",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0d0d0d 0%, #0a1a20 50%, #0d0d0d 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(0,168,225,0.12), rgba(0,168,225,0.06))",
        "cta-gradient": "linear-gradient(135deg, #00A8E1, #0077A8)",
        "text-gradient": "linear-gradient(90deg, #00A8E1, #0077A8)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "scroll": "scroll 40s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,168,225,0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(0,168,225,0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(0,168,225,0.3)",
        "glow-lg": "0 0 60px rgba(0,168,225,0.4)",
        "glow-cyan": "0 0 30px rgba(0,168,225,0.3)",
        card: "0 4px 40px rgba(0,0,0,0.6)",
        "card-hover": "0 8px 60px rgba(0,168,225,0.25)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
