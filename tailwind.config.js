/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        skyBlue: "#2584ff", // For primary color
        aquaBlue: "#00d9ff", // For secondary color
        vividRed: "#ff3400", // For accent color
        deepPurple: "#1b0760", // For headings color
        grayLavender: "#918ca4", // For body color
        slatePurple: "#5c5577", // For darker body color
        lightGray: "#ccc", // For border color
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
