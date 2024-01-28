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
        opacit:"#E5E5E5",
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
        "bg":"url('./images/BG Image.svg')",
        "projects-1": "url('./images/project done-1.svg')",
        "projects-2": "url('./images/project done-2.svg')",
        "projects-3": "url('./images/project done-3.svg')",
        "coverchild": "url('./images/coverchild.svg')"
      },
    },
  },
  plugins: [],
};
