/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-black": "#E1CFE5",
        "primary-gray": "#CED6CE",
        "secondary-gray": "#F5F5F5",
        "new-gray": "#163537",     
      },
    },
  },
  plugins: []
}

