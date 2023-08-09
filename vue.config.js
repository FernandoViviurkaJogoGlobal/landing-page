const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  lintOnSave: false,
  //publicPath: "",
  // devServer: {
  //   port: 8081,
  //   proxy: {
  //     "/": {
  //       target: "http://gg-landing-dev.globalgames.io",
  //       changeOrigin: true,
  //     },
  //   },
  // },
  chainWebpack: (config) => {
    config.module
      .rule("pdf")
      .test(/\.pdf$/)
      .use("file-loader")
      .loader("file-loader");
  },
});
