/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darker: "#152A55",
        dark: "#355797",
        light: "#FBCE00",
        lightFade: "#fbce0050",
        darkerFade: "#152A5555",
        darkFade: "#35579755",
        transparent: "transparent",
      },
      gridTemplateColumns: {
        autoFit: "repeat(auto-fit, minmax(100px, 1fr))",
        autoFill: "repeat(auto-fill, minmax(100px, 1fr))",
      },
    },
  },
  plugins: [],
};
