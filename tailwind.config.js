/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#191919",
        secondary: "#3076FF",
      },
      fontFamily: {
        mono: ["FS Mono", "sans-serif"],
      },
      backdropBlur: {
        "22": "22px",
      },
      backgroundImage: {
        "gradient-blue": "linear-gradient(180deg, #3076FF 0%, #1D49E5 100%)",
      },
    },
  },
  plugins: [],
};
