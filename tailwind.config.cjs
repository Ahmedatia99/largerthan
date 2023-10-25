/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        morning: "#F2C94C",
        sugar: "#FCEDC6",
        darkly: "#1D2130",
        near: "#525560",
      },
      fontFamily: {
        roboto: ["Roboto"],
        courgette: ["Courgette"],
      },
      screens: {
        mobile: "320px",
        tablet: "768px",
        // => @media (min-width: 640px) { ... }

        laptop: "1025px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1279px",
        // => @media (min-width: 1280px) { ... }
      },
      backgroundImage: {
        "hero-pattern": "url('/images/BG Image.svg')",
      },
    },
  },
  plugins: [],
};
