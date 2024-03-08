/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans"],
      },
      colors: {
        primary: "#f3c11b",
        // secondary: "#5AB4A9",
        // secondary_100: "#DEF0EE",
        // secondary_200: "#D0E8E5",
        // dark: "#1b1b1b",
        // light: "#A4B6E1",
        success: "#05CD99",
        grayy: "#787878",
        info: "#C1C4C7",
        danger: "#D92848",
        background: "#F4F7FE",
        input_border: "#EBF1FF",
        modal_headers: "#4D4D4D",
        placeholder: "#C1C4C7",
        table_border: "#F7F9FB",
        input_headers: "#96B0C4",
        alt_btns: "#F9FCFF",
        // : "rgba(120, 120, 120, 1)",
      },
      fontSize: {
        tiny: "8.89px", // Add your custom "tiny" font size here
        // You can add more custom font sizes as needed
      },
      screens: {
        "huge": { min: "1535px" },
        // => @media (min-width: 1535px) { ... }

        xl: { min: "1279px" },
        // => @media (min-width: 1279px) { ... }

        lg: { min: "1023px" },
        // => @media (min-width: 1023px) { ... }

        md: { min: "767px" },
        // => @media (min-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (min-width: 639px) { ... }
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};

