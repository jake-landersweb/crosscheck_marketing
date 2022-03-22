
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ['Rubik']
      },
      colors: {
        primary: "#7bc5d6",
        txt: {
          DEFAULT: '#F5F5FA',
          200: '#e1e1e6',
          300: '#cdcdd2',
          400: '#b9b9be'
        },
        bgdk: {
          500: '#646469',
          600: '#505055',
          700: '#3c3c41',
          800: '#28282D',
          900: '#141419'
        },
      }
    },
  },
  plugins: [],
}
