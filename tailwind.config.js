module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        almost: "calc(-102px + 100vh)",
      },
    },
    fontFamily: {
      comorants: ["Cormorant", "serif"],
      montserrat: ["Montserrat", "sans-serif"],
      SansPro: ["Source Sans Pro", "sans-serif"],
    },
  },
  plugins: [],
};
