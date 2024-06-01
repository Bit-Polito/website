/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(-10deg)' },
          '25%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'none' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.7s ease-in-out 1',
      },
      screens: {
        needForImage: '1000px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-color': 'rgba(var(--text-color))',
        bkg: 'rgba(var(--background-color))',
      },
      height: {
        '300px': '300px',
        '400px': '400px',
      },
      width: {
        '300px': '300px',
        '375px': '375px',
        '400px': '400px',
        '500px': '500px',
      },
      borderRadius: {
        primary: '10px',
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      });
    }),
  ],
};
