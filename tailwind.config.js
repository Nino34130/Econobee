module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
      textColor: theme => theme('colors'),
      textColor: {
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
