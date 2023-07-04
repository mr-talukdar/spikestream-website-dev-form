/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        graphik: ["Graphik", "sans-serif"],
      },
      backgroundImage: {
        'mobile-border': `url('../src/images/videos/Mobile_Border.png')`,
      },
      colors: {
        accent: "#FF8933",
        subtle: "#B1B1B1",
        background: '#1D232C'
      },
      screens: {
        smallphone: { max: "400px" },
        small1: { min: "370px", max: "380px", "max-height": "670px" },
        small2: { min: "390px", max: "395px", "min-height": "830px", "max-height": "850px" },
        tablet: "576px",
        // => @media (min-width: 576px) { ... }
        laptop: "992px",
        // => @media (min-width: 992px) { ... }
        desktop: "1200px",
        // => @media (min-width: 1200px) { ... }
        mac: "1550px",
        mac2: { min: "1400px", max: "1600px" },
        // => @media (min-width: 1600px) { ... }
        ultrawide: "1920px",
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
