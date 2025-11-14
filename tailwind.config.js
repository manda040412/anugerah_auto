/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#000000',
        'brand-red': '#EC2529',
        'brand-blue': '#214791',
        'brand-sky': '#E8F0FB',
        primary: {
          DEFAULT: '#214791',
          light: '#E8F0FB',
          accent: '#EC2529',
          black: '#000000'
        }
      }
    },
  },
  plugins: [],
}