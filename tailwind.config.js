/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontSize: {
      md : "1.6rem",
      lg : ["4.8rem", 1],
    },


    screens:{
        'xs':'320px',
        'bub': {'min': '810px', 'max': '1199px'},
        's': {'min': '0', 'max': '600px'},
        'yo': {'min': '0', 'max': '767px'},
        'yo': {'min': '0', 'max': '767px'},
        

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

      spacing:{
        0: "0",
        1: "0.4rem",
        2: "0.8rem",
        3: "1.2rem",
        4: "1.6rem",
        5: "2rem",
        6: "2.4rem",
        7: "2.8rem",
        8: "3.2rem",
        9: "3.6rem",
        10: "4rem",
        11: "4.4rem",
        12: "4.8rem"
      },

    },
  },
  plugins:  [
      require('tailwind-scrollbar-hide')
    ]
}
