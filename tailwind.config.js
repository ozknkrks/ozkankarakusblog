module.exports = {
  darkMode: "class",

  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors:{
        lightColor:"#BE7860", //300 (çizgi)
        siteColor:"#D67553", // bg-emerald-400
        secondaryColor:"#CB5930", //bg-emerald-500
        thirdColor:"#A64927", //600
        fifthColor:"#81391E" //800 (activeNavText,dark:hoverText)
      }
    },
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

//https://colors.dopely.top/color-toner/d67553-tones-40