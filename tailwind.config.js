/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mlandscape: "479px",
      // => @media (min-width: 479px) { ... }

      tablet: "641px",
      // => @media (min-width: 641px) { ... }

      desktop: "811px",
      // => @media (min-width: 1024px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
