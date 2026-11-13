// Configuration de Vue CLI
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      // N'affiche plus l'écran rouge pour les erreurs des extensions Chrome
      overlay: { runtimeErrors: false },
    },
  },
});
