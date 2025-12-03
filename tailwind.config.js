/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F7F5EE',
        'dark-green': '#1A3C34',
        'gold': '#F2A93B',
        'muted': '#43645C',
        'button-green': '#1A6F5C',
      },
      fontFamily: {
        'caveat': ['Caveat', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
