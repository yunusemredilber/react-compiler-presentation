import path from "path";
import {
  defineReactCompilerLoaderOption,
  reactCompilerLoader,
} from "react-compiler-webpack";
import { WebpackConfiguration } from "webpack-cli";

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "compiled-app.bundle.js",
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
        test: /\.[mc]?[jt]sx$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: reactCompilerLoader,
            options: defineReactCompilerLoaderOption({
              // React Compiler options goes here
              // compilationMode: 'annotation',
            }),
          },
        ],
      },
    ],
  },
  devtool: "inline-source-map",
} satisfies WebpackConfiguration;
