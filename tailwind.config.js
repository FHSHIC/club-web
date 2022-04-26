module.exports = {
  content: ["index.html",
    "./Marketing/index.html",
    "./Marketing/**/*.{html,js}",

    "./Technical/index.html",
    "./Technical/**/*.{html,js}",

    "./src/**/*.{vue,js,vs,jsx,vsx}"
  ],
  theme: {
    extend: {
      colors: {
        'pic-rgba': 'rgba(34, 34, 34, 0.5)',
        'back-rgba': 'rgba(11, 11, 11, 0.5)',
      },
    },
  },
  plugins: [],
}
