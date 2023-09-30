module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    screens: {
      sm: '390px',
      // => mobile view

      md: '768px',
      // => bigger mobile view

      lg: '1024px',
      // => tablet view

      xl: '1280px',
      // => laptop view

      xxl: '1536px',
      // => desktop/ultrawide view
    },
  },
}
