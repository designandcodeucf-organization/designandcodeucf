/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens:{
        'xs':'320px',
         'bub': {'min': '810px', 'max': '1199px'},
        ...defaultTheme.screens,
      },

    extend: {
      
      fontFamily: {
        'sans': "'Manrope', sans-serif;",
      },

      colors: {
        primaryLight:'#EFE9F4',
        primaryDarkBlue: '#1D1153',
        primaryLightBlue:'#5DA9E9',
        secondaryPink:'#E75A7C',
        secondaryYellow:'#FFCC37',
      },
    },
  },
  plugins: [ require('tailwind-scrollbar-hide')
    
  ],
}
  


