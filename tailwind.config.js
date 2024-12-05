/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        biryani: ["Biryani", "sans-serif"],
        notoSansThaiLooped: ["Noto Sans Thai Looped", "sans-serif"],
        
      },
    },
  },
  plugins: [],
};
