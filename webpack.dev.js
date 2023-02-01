//Configuration For Test 

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBundleAnalyzer =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "/src/app.js"),
    },
  output: {
    path: path.resolve(__dirname, "/dist"),
    filename: "[name].[contenthash].bundle.js",
    assetModuleFilename: "/dist/assets/[hash][ext]",
    clean: true,
  },

  //loaders
  module: {
    rules: [
      // Style Loader
      {
        test: /((^.+\.s(a|c)ss$)|(^.+\.css$))/m,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      // Asset Loader
      {
        test: /\.(png|jpg|png|webp|avif|woff|woff2|svg)/,
        exclude: /nodu_modules/,
        type: "asset/resource",
      },
      // React Loader
      {
        test: /^.+\.(js|jsx)/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },

  //pulgins
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "__test__/src/template.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new WebpackBundleAnalyzer({
      analyzerPort: "auto",
    }),
  ],

  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "__test__/dist"),
    },
    watchFiles: ["__test__/**/*"],
    compress: true,
    port: 8080,
    open: true,
  },
  optimization: {
    emitOnErrors: false,
    runtimeChunk: {
      name: "runtime",
    },
  },
};
