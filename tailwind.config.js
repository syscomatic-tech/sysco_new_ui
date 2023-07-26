/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      primary: ['Rajdhani', 'sans-serif'],
      title: ['Kanit', 'sans-serif']
    },
    fontSize: {
      sm: '0.9rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.375rem',
      '3xl': '1.5rem',
      '4xl': '1.75rem',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        darkGradiantBg: ' linear-gradient(113.87deg, #262933 19.52%, #171821 51.03%, #11131A 96.1%)',
        getAQuoteImgBg: 'radial-gradient(50% 50% at 50% 50%, rgba(13, 13, 13, 0) 0%, #0D0D0D 100%)'
      },
      screens: {
        '5xl': '2500px',
        '10xl': '5800px'
      },
      colors: {
        black: '#262626',
        primary: {
          50: '#EAE8F3',
          100: '#BFB6DA',
          200: '#A093C9',
          300: '#7562B0',
          400: '#5A44A1',
          500: '#311589',
          600: '#2D137D',
          700: '#230F61',
          800: '#1B0C4B',
          900: '#15093A',
          light: '#551FFF',
          DEFAULT: '#311589'
        },
        background: {
          50: '#E6E6E9',
          100: '#B2B0B9',
          200: '#8D8A98',
          300: '#595468',
          400: '#39334B',
          500: '#07001E',
          600: '#06001B',
          700: '#050015',
          800: '#040011',
          900: '#03000D',
          DEFAULT: '#07001E'
        },
        darkBg: '#0d0d0d',
        lightGray: '#9C99A5'
      },
      animation: {
        'slow-spin': 'spin 9s linear infinite',
        'slow-spin-three': 'spin 19s linear infinite'
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: false,
  },
}
