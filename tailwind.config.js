/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./pl/**/*.html", "./en/**/*.html", "./js/**/*.js", "./script.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#A88F7F",
        secondary: "#D4C5BB", 
        "background-light": "#F9F6F2",
        "background-dark": "#1a1816", 
        "surface-light": "#FFFFFF",
        "surface-dark": "#262320",
        "text-light": "#333333",
        "text-dark": "#E5E5E5",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        DEFAULT: "1rem",
        'xl': "1rem",
        '2xl': "1.5rem", 
        '3xl': "1.5rem", 
      },
    },
  },
  plugins: [],
}
