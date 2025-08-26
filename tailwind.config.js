/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arabic: ["'Noto Naskh Arabic'", "serif"],   // Arabic body
        heading: ["'Cairo Play'", "sans-serif"],     // All headings
        english: ["'Cairo Play'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
