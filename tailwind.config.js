const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: { 
      fontFamily: { 
          "lato": ['Lato', 'sans-serif'],
          "custom" : ['Libre Baskerville', 'serif'] 
      } 
  }, 
  },
  plugins: [],
});