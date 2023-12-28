/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "red":"#FF6868",
        "green": "#39DB4A",
        "primaryBG":"#FCFCFC",
        "secondary":"#555"
  }
    },
   
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

