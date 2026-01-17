/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        macondo: ["Macondo", "cursive"],
        sans: ["Lora", "system-ui", "sans-serif"],
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-5px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(5px)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spinner-path": {
          "0%": { strokeDashoffset: 251.2 },
          "50%": { strokeDashoffset: 62.8, transform: "rotate(90deg)" },
          "100%": { strokeDashoffset: 251.2, transform: "rotate(360deg)" },
        },
      },
      animation: {
        shake: "shake 0.5s ease-in-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "spinner-path": "spinner-path 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
