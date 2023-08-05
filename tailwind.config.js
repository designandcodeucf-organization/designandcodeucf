/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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

