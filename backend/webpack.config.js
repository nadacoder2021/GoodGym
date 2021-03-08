const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "inline-source-map",
  entry: ["webpack/hot/poll?1000", path.join(__dirname, "src/main.ts")],
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, "node_modules")],
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  externals: [
    nodeExternals({
      allowlist: ["webpack/hot/poll?1000"],
    }),
  ],
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  plugins: [new CleanWebpackPlugin(), new webpack.HotModuleReplacementPlugin()],
  watch: true,
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
};
