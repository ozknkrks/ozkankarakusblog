module.exports = {
  darkMode: "class",

  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
  ],
  variants: {
    scrollbar: ['"rounded"'],
    scrollbar: ["dark"],
  },
};
