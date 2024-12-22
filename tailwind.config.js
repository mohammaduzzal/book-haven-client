/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'lora':["Lora", "serif"],
        'roboto':[ "Roboto", "sans-serif"]
      },
      colors:{
        richGreen: '#4CAF50',
        bookBeige: '#F5F5DC',
        dustyBlue: '#5D92BA',
        maroon: '#8B0000',
        goldenYellow: '#FFD700',
        slateGray: '#708090',
        softWhite: '#FFFFFF',
        charcoalGray: '#333333',
      }
    },
  },
  plugins: [require('daisyui'),],
}
 