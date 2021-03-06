const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        Marketing: resolve(__dirname, "Marketing/index.html"),
        M1: resolve(__dirname, "Marketing/About.html"),
        M2: resolve(__dirname, "Marketing/Dream.html"),
        M3: resolve(__dirname, "Marketing/MeetStudent.html"),
        Technical: resolve(__dirname, "Technical/index.html"),
        T1: resolve(__dirname, "Technical/FhicClub.html"),
        T2: resolve(__dirname, "Technical/MeetStudent.html"),
      },
    },
  },
});
