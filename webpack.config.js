const webpackMerge = require("webpack-merge");
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge({
    mode,
    output: {
      filename: "my-bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
      ]
    },
    plugins: [new BundleAnalyzerPlugin()]
  });
};
