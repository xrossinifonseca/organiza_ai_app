/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#00736D',
        secundary: '#002E2C',
        'blue-light': '#80B9B6#',
        'gray-primary': '#E6F1F0',
      },
    },
  },
  plugins: [],
};
