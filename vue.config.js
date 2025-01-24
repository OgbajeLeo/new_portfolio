const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: '/', 
  pwa: {
    workboxOptions: {
      skipWaiting: true, // Forces the new Service Worker to activate immediately
      clientsClaim: true, // Ensures that all tabs use the updated Service Worker
    },
  },
},

);
