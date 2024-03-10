module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  media: false,
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      colors: {
        'winter-primary': '#a3c3d8',
        'winter-secondary': '#456289',
        'winter-tertiary': '#80a4c0',
        'winter-dark': '#1d1b28',
        'winter-light': '#d0e2eb',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '1.5rem',
      },
    },
    fontFamily: {
      primary: ['Ubuntu, sans-serif'],
      secondary: ['Oswald, sans-serif'],
    },
    boxShadow: {
      card: '1px 1px 10px rgba(0,0,0,.1)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
