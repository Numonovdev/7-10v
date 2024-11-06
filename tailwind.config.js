/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '540px',
      md: '760px',
      lg: '1200px',
      xl: '1728px',
    },
    extend: {},
    fontFamily:{
      SpaceGrotesk: ["Space Grotesk", 'sans-serif']
    },
    container:{
      center:true,
      padding: '12px',
      md: '32px'
    }
  },
  plugins: [],
}