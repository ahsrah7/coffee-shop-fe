/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      deepLagoanBlue:'#003B40',
      gold:'#FDCB6E',
      gray:'#CCC',
      lighterGray:'rgb(226 232 240)',
      white:"#fff"
    },
    fontFamily:{
      Raleway:["Raleway", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}

