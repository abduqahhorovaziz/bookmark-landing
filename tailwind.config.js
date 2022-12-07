/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      keyframes: {
        opacit: {
          '0%': {opacity: 0},
          '100%': {opacity: 100}
        }
      },
      animation: {
        opacit: 'opacit 0.3s ease-in-out',
      },
      spacing: {
        '320': '320px',
        'sm': '640px',
        'sm-max': {'max': '640px'},
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '540': '540px'
      },
      boxShadow: {
        'custom': '0px 10px 20px -5px rgba(73, 93, 207, 0.20012)',
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
      'dark_blue_opacity': 'rgba(36, 42, 69, 0.95)',
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
  corePlugins: {
    container: false,
  },
}
