/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        orange:{
          400:'#FF7600',
          500:'#F5821F',
          600:"#FF5C00"
        },
        gray:{
          200:"#E4E4E4",
          300:"#E1E1E1",
          400:"#D1D1D1"
        },
        dark:"#2D2D2D"
      },
      boxShadow:{
        shadow1:"0px 0px 50px rgba(0, 0, 0, 0.08);",
        black25:"0px 0px 25px rgba(0, 0, 0, 0.05);",
        black15:"0px 0px 15px rgba(0, 0, 0, 0.15);",
        black08:"0px 0px 8px rgba(0, 0, 0, 0.05)",
        black05:" 0px 4px 5px rgba(0, 0, 0, 0.1)"
      },
      
    },
  },
  plugins: [],
}
