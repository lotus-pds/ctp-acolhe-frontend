/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
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
          100: '#FF66F0',
          200: '#C03CFF',
          300: '#8F00FF'
        }
      },
    },
  },
  plugins: [],
}
