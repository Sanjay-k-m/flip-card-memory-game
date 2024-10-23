/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kablammo: ['"Kablammo"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
