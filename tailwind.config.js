/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"inter"', "sans-serif"],
      },
      colors: {
        brend: {
          black: {
            100: '#1C1A28',
            200: '#232031',
            300: 'rgba(255, 255, 255, 0.08)'
          },
          blue: {
            100: '#306EE8',
            200: '#416ABD'
          },
          gradient: {
            100: '#0F1B33',
            200: '#112857',
            300: 'rgba(34, 83, 181, 1)',
            400: 'rgba(18, 35, 67, 1)'
          }
        }
      }
    },
  },
  plugins: [],
}

