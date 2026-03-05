/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        graphite: 'rgb(var(--color-graphite) / <alpha-value>)',
        copper: 'rgb(var(--color-copper) / <alpha-value>)',
        sand: 'rgb(var(--color-sand) / <alpha-value>)',
        cream: 'rgb(var(--color-cream) / <alpha-value>)'
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Manrope"', 'sans-serif']
      },
      boxShadow: {
        soft: '0 12px 45px rgba(11, 19, 22, 0.14)'
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1.02)' },
          '50%': { transform: 'translateY(-10px) scale(1.06)' }
        },
        glow: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' }
        }
      },
      animation: {
        rise: 'rise 700ms ease-out both',
        float: 'float 7s ease-in-out infinite',
        glow: 'glow 4s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
