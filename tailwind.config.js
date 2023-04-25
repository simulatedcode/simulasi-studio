const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex sans", ...defaultTheme.fontFamily.sans],
        mono: ["IBM Plex mono", ...defaultTheme.fontFamily.mono],
        display: ["VG5000", "cursive"]
      },
    },
    plugins: [],
  }
}
