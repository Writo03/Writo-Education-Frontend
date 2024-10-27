/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#00acb4",
        secondary : "#058187"
      },
      backgroundImage: {
        'card-background': "url('../src/assets/cardbackground.png')",
        'card-background2': "url('../src/assets/image 18.png')",
      }
    },
  },
  plugins: [],
}

