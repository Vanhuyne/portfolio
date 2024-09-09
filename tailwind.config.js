/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#fffffe',
        'headline': '#272343',
        'paragraph': '#2d334a',
        'button': '#ffd803',
        'button-text': '#272343',
        'stroke': '#272343',
        'main': '#fffffe',
        'highlight': '#ffd803',
        'secondary': '#e3f6f5',
        'tertiary': '#bae8e8',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      screens: {
        'iphone12': '390px',
      },
    },
  },
  plugins: [],
}

