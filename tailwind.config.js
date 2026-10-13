/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: '#0C0C0C',
          card: '#141414',
          border: 'rgba(255, 255, 255, 0.1)',
          muted: '#8E8E93',
          light: '#F5F5F7',
        },
      },
    },
  },
  plugins: [],
}
