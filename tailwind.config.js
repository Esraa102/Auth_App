/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#DB1A5A",
        bgColor: "#131315",
        secondaryBgColor: "#18181B",
      },
    },
  },
  plugins: [],
};
