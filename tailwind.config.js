/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#74664a",
        secondary: "#FFF7EB",
        tertiary: "#D7CEC2",
      },
      fontFamily: {
        sans: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
