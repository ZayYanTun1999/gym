/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      // listStyleImage: {
      // checkmark: 'url("/img/angles-right-solid.png")'}
    },
    fontFamily: {
      'title': ['Barlow Condensed'],
      'body': ['Montserrat']
    }
  },
  plugins: [],
}

