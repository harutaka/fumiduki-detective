module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  safeList: ["img-intermiddle01", "img-intermiddle02"],
  theme: {
    extend: {
      backgroundImage: {
        "img-intermiddle01": "url('/img/intermiddle01.jpg')",
        "img-intermiddle02": "url('/img/intermiddle02.jpg')",
      },
    },
  },
  plugins: [],
}
