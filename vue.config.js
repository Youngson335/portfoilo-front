module.exports = {
  publicPath: "/",

  outputDir: "dist",

  assetsDir: "assets",

  configureWebpack: {
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  },
};
