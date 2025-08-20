/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Standard color palette
        'blue': {
          '50': '#f9f6f6',
          '100': '#f0e9e9',
          '200': '#e2d5d4',
          '300': '#cdb6b5',
          '400': '#b08e8c',
          '500': '#967270',
          '600': '#805f5d',
          '700': '#73514f',
          '800': '#673a37',
          '900': '#4d2c2a',
        },
        // Keep original colors for backward compatibility
        'villa-gold': '#FFD700',
        'villa-primary': '#74443e',
      },
      fontFamily: {
        'sans': ['Condor', 'system-ui', 'sans-serif'],
        'condor': ['Condor', 'sans-serif'],
      },
      textShadow: {
        'DEFAULT': '0 2px 4px rgba(0, 0, 0, 0.5)',
        'lg': '0 4px 8px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'scale-in': 'scaleIn 0.5s ease-out',
        'fade-in': 'fadeIn 1s ease-in-out',
        'fade-in-left': 'slideInLeft 0.8s ease-in-out',
        'fade-in-right': 'slideInRight 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-in-out',
      },
      keyframes: {
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}