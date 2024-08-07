/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        '1f2029':'#1f2029',
        '141316':'#141316',
        '7396fc':'#7396fc',
        '7292ff':'#7292ff',
        '44464a':'#44464a',
      }
    },
  },
  plugins: [],
}

