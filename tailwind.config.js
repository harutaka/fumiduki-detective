module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  safeList: ["bg-img-slide01", "bg-img-slide02", "bg-img-slide03"],
  theme: {
    extend: {
      backgroundImage: {
        "img-slide01": "url('/img/slide01.jpg')",
        "img-slide02": "url('/img/slide02.jpg')",
        "img-slide03": "url('/img/slide03.jpg')",
      },
    },
  },
  plugins: [],
}
