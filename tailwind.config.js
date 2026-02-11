/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#646cff",
        secondary: "#535bf2",
        dark: "#1a1a1a",
        light: "#f1f1f1",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "zoom-in": "zoomIn 0.3s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        zoomIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
