/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      banner: '#9538E2',
      white:'#FFFFFF',
      red : '#FF0000',

    },
    backgroundImage: {
      bannerImg:"url('./dist/banner.jpg')"
    },

  },
  plugins: [
    require('daisyui'),
  ],
}

