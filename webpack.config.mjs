import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import Dotenv from "dotenv-webpack";

export default {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve("src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      template: "./pages/index.html",
      filename: "index.html",
    }),
    new Dotenv(),
  ],
  devServer: {
    static: "./dist",
    hot: true,
    watchFiles: ["./pages/**/*.html", "./src/**/*.js"],
  },
  mode: "development",
};
