/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: withOpacity("--e-global-color-primary"),
        secondary: withOpacity("--e-global-color-secondary"),
        text: withOpacity("--e-global-color-text"),
        accent: withOpacity("--e-global-color-accent"),
        link_hover: withOpacity("--e-global-color-hover-link"),
        cl_border: withOpacity("--e-global-color-border"),
      },
      fontFamily: {
        sans: ["Vazir", ...fontFamily.sans],
      },
      container: {
        center: true,
      },
      inset: {
        "-9": "-9px",
        "-6": "-6px",
      },
      backgroundImage: {
        'custom-pattern': "url('/src/assets/images/header-contant-ecolive.png')",
        'speacialSales': "url('/src/assets/images/bg-sp.jpg')",
        'speacialSales2': "url('/src/assets/images/bg-sp2.png')",
        'layerFooter': "url('/src/assets/images/layerFooter.png')",
        'instagram': "url('/src/assets/images/bg-instagram.jpg')",
        'swiperBg': "url('/src/assets/images/swiperBg.png')",
      },
      rotate: {
        '44': '44deg',
      },
      boxShadow: {
        'custom': '0px 4px 60px 0px rgba(0, 0, 0, 0.03921568627450)',
      },

    },
  },
  plugins: [],
};
