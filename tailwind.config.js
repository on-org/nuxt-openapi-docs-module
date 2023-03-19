/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{html,js,vue}',
    './components/**/*.{html,js,vue}',
    './templates/**/*.{html,js,vue}',
  ],
  darkMode: 'class',
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      opacity: {
        '10': '0.1',
        '20': '0.2',
        '100': '0.8',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        dark: {
          100: '#fafafa',
          200: '#d6d6d6',
          300: '#b3b3b3',
          400: '#8f8f8f',
          500: '#6c6c6c',
          600: '#4a4a4a',
          700: '#282828',
          800: '#1a1a1a',
          900: '#0d0d0d',

          'gray-100': '#1a1a1a',
        },
      },
    }
  },
}
