/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark': {
          '100': '#161722',
          '200': '#25273C',
          '300': '#393A4C',
          '400': '#4D5066',
          '500': '#777A92',
          '600': '#CACDE8',
          '700': '#E4E5F1',
        },
        'light': {
          '100': '#484B6A',
          '200': '#9394A5',
          '300': '#D2D3DB',
          '400': '#E4E5F1',
          '500': '#FAFAFA',
        },
      }
    },
  },
  plugins: [],
}

