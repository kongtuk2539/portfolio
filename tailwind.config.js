/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'Lilita-One': ['Lilita One', 'cursive'],
        Nunito: ['Nunito', 'sans-serif'],
      },
      padding: {
        301: '301px',
        150: '150px',
        275: '275px',
      },
      height: {
        550: '550px',
        380: '380px',
        900: '900px',
      },
      width: {
        350: '350px',
      },
      colors: {
        gray: '#BEBEBE',
        'gray-1': '#EDEDED',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
