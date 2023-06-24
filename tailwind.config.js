/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      colors: {
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
        }
      }
    },
  },
  plugins: [],
}
