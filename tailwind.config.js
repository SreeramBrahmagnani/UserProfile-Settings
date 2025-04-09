/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Include all source files
  theme: {
    extend: {
      colors: {
        skyblue: '#81d4fa',
        darkblue: '#1a202c',
      },
    },
  },
  plugins: [],
};



