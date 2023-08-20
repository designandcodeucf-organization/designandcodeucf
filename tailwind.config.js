/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'bub': {'min': '810px', 'max': '1199px'},
      // => @media (min-width: 810px) and (max-width: 1199px)
    },
    extend: {
      fontFamily: {
        'sans': "'Manrope', sans-serif;",
      },

    }
  },
  plugins: [
    
  ],
}

