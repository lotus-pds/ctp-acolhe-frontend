const withMT = require("@material-tailwind/react/utils/withMT");
 

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx}",
    "./index.html"
  ],
  theme: {
    extend: {

      gridTemplateRows: {
        // Simple 2 row grid
        '2': 'repeat(8, minmax(1fr, 2fr))',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      },

      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'mouse': ['Mouse Memoirs']
      },

      colors : {
        gray: {
          50: '#F5FAFD',
          100: '#FFFFFF',
          150: '#E4EBEF',
          200: '#CCD5DA',
          500: '#85959E', 
          700: '#0B141A',
          800: '#374045',
          850: '#252D32',
          900: '#111B21'
        },

        green: {
          100: '#CCFF60',
          200: '#A1FB5A',
          300: '#21D789',
          400: '#3CA075'
        },
        blue :{
          100: 'rgba(0, 178, 255, .6)',
          200: 'rgba(5, 72, 150, .6)',
          300: 'rgba(8, 47, 92, .6)'
        },
        red :{
          100: 'rgba(255, 168, 175, .8)',
          200: 'rgba(249, 115, 126, .8)',
          300: 'rgba(255, 35, 53, .8)',
          400: 'rgba(199, 35, 47, .8)'
        },
        purple :{
          100: 'rgba(255, 102, 240, .6)',
          200: 'rgba(192, 60, 255, .6)',
          300: 'rgba(143, 0, 255, .6)',
          400: 'rgba(255, 102, 240, 1)',
          500: 'rgba(192, 60, 255, 1)'
        },
        yellow: {
          100: 'rgba(255, 231, 105, 1)',
          200: 'rgba(255, 153, 0, 1)'
        }
      },
    },
  },
  plugins: [],
});
