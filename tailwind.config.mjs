/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro': ['SF Pro Display', 'sans-serif'],
      },
      fontWeight: {
        '510': '510',
      },
      colors: {
        'blue-light': '#ffffff',
        'blue-dark': '#001CE0',
      },
    },
  },
  plugins: [],
};