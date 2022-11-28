/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '540': '540px'
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif'],
    },
    colors: {
      'white': '#FFFFFF', 
      'custom_orange': '#FA5959',
      'dark_blue': '#242A45',
      'custom_blue': '#5267DF',
      'custom_gray': '#9194A2',
      'light_gray': '#F7F7F7',
    },
    fontSize: {
      default_size: `13px;`,
    },
    lineHeight: {
      '17': '17px',
    },
    letterSpacing: {
      '1.5': '1.5px'
    },
    borderRadius: {
      '5': '5px',
    }
  },
  plugins: [],
}
