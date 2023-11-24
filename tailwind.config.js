/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'DEFAULT': '#3B849C'
        },
        border: {
          'DEFAULT': '#E3E6EB'
        }
      }
    },
  },
  plugins: [],
}

