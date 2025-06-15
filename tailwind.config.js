/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'makamat-orange': '#E49D23',
        'makamat-teal': '#009FA1',
        'makamat-dark-teal': '#007A94',
        'makamat-dark-blue': '#2F5572',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}