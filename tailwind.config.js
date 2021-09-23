module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#EECF64',
      'secondary': '#545454',
      'danger': '#e3342f',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
