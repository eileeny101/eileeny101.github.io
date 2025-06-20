/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "!./node_modules/**"
  ],
  theme: {
    extend: {
      fontFamily: {
        'exo': ['"Exo 2"', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      },
      colors: {
        'background': 'rgb(24, 24, 24)',
        'text': '#e0e0e0',
      },
    },
  },
  plugins: [],
} 