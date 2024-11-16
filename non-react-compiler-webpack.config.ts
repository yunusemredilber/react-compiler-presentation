import path from "path";
import { WebpackConfiguration } from "webpack-cli";

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "non-compiled-app.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/.*/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
  devtool: "inline-source-map",
} satisfies WebpackConfiguration;
