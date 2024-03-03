/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightblue: '#B2EBF2',
      },
      animation: {
        'slide-in': 'slideIn ease-out 0.5s',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'write-text': 'writeText 1s linear'
      }
    },
  },
  variants: {},
  plugins: [],
}
