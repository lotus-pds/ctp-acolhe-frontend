/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx'
  ],
  theme: {
    extend: {

      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'mouse': ['Mouse Memoirs']
      },

      colors : {
        gray: {
          100: '#FFFFFF',
          200: '#ECECEC',
          900: '#282828'
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
          300: 'rgba(143, 0, 255, .6)'
        }
      },
    },
  },
  plugins: [],
}
