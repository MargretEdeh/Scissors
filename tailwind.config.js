/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#0065FE"
      },
      backgroundImage: {
        'pattern': "url('./images/background.svg')",
        'faqback' : "url('./images/faqback.svg')"
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

