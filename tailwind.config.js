/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050505",
        "green-glow": "#39d353",
        "blue-glow": "#58a6ff",
        slate: {
          muted: "#8b949e",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        sans: ["Geist", "Inter", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "scan": "scan 2s linear infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(400%)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "1", textShadow: "0 0 20px #39d353, 0 0 60px #39d35366" },
          "50%": { opacity: "0.7", textShadow: "0 0 40px #39d353, 0 0 100px #39d35399" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
