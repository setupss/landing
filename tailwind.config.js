/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      
    },
    fontSize:{
      'base': ['48px'],
      'sm': ['16px'],
    },
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
    },
  },
  plugins: [],
}
