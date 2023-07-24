/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand']
      },
      colors: {
        'base-text': '#333333',
      },
    },
  },
  plugins: [],
}

