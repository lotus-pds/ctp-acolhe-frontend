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
          100: '#00B2FF',
          200: '#054896',
          300: '#082F5C'
        },
        red :{
          100: '#FFA8AF',
          200: '#F9737E',
          300: '#FF2335',
          400: '#C7232F'
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
