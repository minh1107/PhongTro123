/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'./public/index.html'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#F5F5F5',
        secondary1: '#F73859',
        secondary2: '#1266DD',
        inputColor: '#E8F0FE',
        buttonColor: '#3961FB'
      }
      ,
      colors: {
        borderColor: '#dedede'
      },
      maxWidth: {
        '600': '600px'
      },
      width: {
        '600': '600px',
        '1100': '1100px'
      },
      height: {
        '450': '450px'
      }
    },
  },
  plugins: [],
}

