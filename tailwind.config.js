/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        'primary': {
          '50': '#fdfcfb',
          '100': '#f9f5f4',
          '200': '#f0e9e8',
          '300': '#e2d5d3',
          '400': '#d1b9b6',
          '500': '#b89a95',
          '600': '#673a37',
          '700': '#5a322f',
          '800': '#4d2c2a',
          '900': '#412422',
        },
        // Secondary brand colors
        'secondary': {
          '50': '#f0fdfa',
          '100': '#ccfbf1',
          '200': '#99f6e4',
          '300': '#5eead4',
          '400': '#2dd4bf',
          '500': '#14b8a6',
          '600': '#0d9488',
          '700': '#0f766e',
          '800': '#115e59',
          '900': '#134e4a',
        },
        // Accent colors
        'accent': {
          '50': '#fffbeb',
          '100': '#fef3c7',
          '200': '#fde68a',
          '300': '#fcd34d',
          '400': '#fbbf24',
          '500': '#f59e0b',
          '600': '#d97706',
          '700': '#b45309',
          '800': '#92400e',
          '900': '#78350f',
        },
        // Neutral colors
        'neutral': {
          '50': '#f8fafc',
          '100': '#f1f5f9',
          '200': '#e2e8f0',
          '300': '#cbd5e1',
          '400': '#94a3b8',
          '500': '#64748b',
          '600': '#475569',
          '700': '#334155',
          '800': '#1e293b',
          '900': '#0f172a',
        },
        // Original colors for backward compatibility
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
        'loading-bar': 'loadingBar 3s ease-in-out',
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
        loadingBar: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
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
        '.contain-strict': {
          contain: 'strict',
        },
        '.contain-content': {
          contain: 'content',
        },
        '.contain-size': {
          contain: 'size',
        },
        '.contain-layout': {
          contain: 'layout',
        },
        '.contain-style': {
          contain: 'style',
        },
        '.contain-paint': {
          contain: 'paint',
        },
      };
      addUtilities(newUtilities);
    },
  ],
  safelist: [
    // Safelist common classes that might be generated dynamically
    /bg-(primary|secondary|accent)-(50|100|200|300|400|500|600|700|800|900)/,
    /text-(primary|secondary|accent)-(50|100|200|300|400|500|600|700|800|900)/,
    /border-(primary|secondary|accent)-(50|100|200|300|400|500|600|700|800|900)/,
    /hover:bg-(primary|secondary|accent)-(50|100|200|300|400|500|600|700|800|900)/,
    /animate-(fade-in|slide-up|scale-in|fade-in-left|fade-in-right)/,
    /btn-(primary|secondary|accent|outline)/,
    /gradient-(primary|secondary|accent)-(light|dark)?/,
  ],
}