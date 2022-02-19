module.exports = {
  purge: {
    enabled: true,
    content: ["src/*.html"],
  },
  darkMode: class, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'daily-dev-tips': "#F89283"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")]
}
