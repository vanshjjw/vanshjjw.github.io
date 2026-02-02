/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#965f41',
          light: '#d4a276',
          dark: '#5a3a28',
        },
        warm: {
          50: '#f5f0eb',
          100: '#e8e2dc',
          200: '#e0d7cd',
          300: '#d4c9bc',
          page: '#E0E6E5',
        },
        ink: {
          DEFAULT: '#4a3426',
          light: '#6e4c3a',
          muted: '#7d5a46',
          title: '#5a3a28',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
