module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
 
  theme: {
    extend: {
      boxShadow: {
        'xl': "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
    },

      fontFamily: {
        fugasOne: ["fugasOne", "serif"],
        typograhica:["typograhica","sanserif"],
        minionPro:["minionPro","serif"]
      }
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
}
