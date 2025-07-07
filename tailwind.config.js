/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "war-room-void": "#0a0a0a",
        "war-room-abyss": "#1a1a1a",
        "war-room-charcoal": "#2a2a2a",
        "war-room-steel": "#3a3a3a",
        "war-room-silver": "#4a4a4a",
        "cyber-cyan-dim": "#004d4d",
        "cyber-cyan-base": "#008b8b",
        "cyber-cyan-bright": "#00d4d4",
        "cyber-cyan-intense": "#00ffff",
      },
      fontFamily: {
        command: ["Orbitron", "sans-serif"],
        terminal: ['"Share Tech Mono"', "monospace"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scan-line": "scan-line 3s linear infinite",
        "tunnel-zoom": "tunnel-zoom 8s ease-in-out infinite",
        "depth-float": "depth-float 6s ease-in-out infinite",
      },
      perspective: {
        500: "500px",
        1000: "1000px",
        1500: "1500px",
        2000: "2000px",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: ".8",
            transform: "scale(1.05)",
          },
        },
        "scan-line": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "tunnel-zoom": {
          "0%, 100%": { transform: "scale(1) translateZ(0px)" },
          "50%": { transform: "scale(1.05) translateZ(10px)" },
        },
        "depth-float": {
          "0%, 100%": { transform: "translateZ(0px) rotateX(0deg)" },
          "33%": { transform: "translateZ(15px) rotateX(1deg)" },
          "66%": { transform: "translateZ(-5px) rotateX(-0.5deg)" },
        },
      },
    },
  },
  plugins: [],
};
