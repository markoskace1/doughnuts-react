module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        18: "18px",
      },
      colors: {
        "dark-pink": "#FE707B",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
