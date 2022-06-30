const plugin = require('tailwindcss/plugin')

// Rotate X utilities
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-x-180': {
      transform: 'rotateX(180deg)'
      ,
    },
  })
})

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Epilogue: ["Epilogue", "sans-serif"]
      },
      colors: {
        customwhite:'#f2f0f0',
        customblack:'#141414',
        customgray:' #696969',
        
      },
    },
  },
  plugins: [rotateX],
}
