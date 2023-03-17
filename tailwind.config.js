const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['scss/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        fuchsia: colors.fuchsia,
        indigo: colors.indigo,
        teal: colors.teal,
        lime: colors.lime,
        orange: colors.orange,
        bgray: colors.blueGray,
        amber: colors.amber,
        emerald: colors.emerald,
        lblue: colors.sky,
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}
