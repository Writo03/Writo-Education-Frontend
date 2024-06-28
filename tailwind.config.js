/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'max-height',
      },
      transitionDuration: {
        
        '400': '1000ms', // Even longer duration
      },
      maxHeight: {
        '0': '0',
        'screen': '100vh',
      },
      rotate:{
        '27':'27deg',
      },
      insert:{
        '17px':'17px'
      },
      skew:{
        '35':'35deg'
      }
    },
  },
  plugins: [],
}