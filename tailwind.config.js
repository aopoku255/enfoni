/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ['14px', '20px'],
      },
      colors: {
        'green': '#119E09',
        'deep-green': '#119E09',
        'light-green': '#D5F2D4',
        'purple':'#563D8E',
        'blue': '#01A1CF'
      },
      backgroundImage: {
        'hero': "url('/assets/images/banner.png')"
      },
      spacing: {
        '0.25': "1px",
        '128': '32rem',
        '144': '36rem',
        '148': '38rem',
        '150': '40rem',
      },
      borderSpacing: {
        '1': "1px"
      }
      
    },
  },
  plugins: [],
}