import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      colors: {
        void: "#050508",
        obsidian: "#0c0c10",
        ink: "#111116",
        graphite: "#1a1a22",
        dust: "#2e2e3a",
        ash: "#5a5a72",
        fog: "#9090a8",
        mist: "#c8c8d8",
        ivory: "#f0efea",
        paper: "#f7f6f2",
        "orb-green": "#1a3a2a",
        "orb-glow": "#2d6b4a",
        "accent-gold": "#c9a96e",
        "accent-sage": "#7aab8a",
      },
      letterSpacing: {
        "ultra": "0.25em",
        "widest": "0.15em",
      },
    },
  },
  plugins: [],
};
export default config;
