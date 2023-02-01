//Configuration For Test Code __Test__

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBundleAnalyzer =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: {
    signup: {
      import: path.resolve(__dirname, "./__test__/src/pages/signup/signup.js"),
    },
    verifyEmail: {
      import: path.resolve(
        __dirname,
        "./__test__/src/pages/verifyEmail/verifyEmail.js"
      ),
    },
    verifyAccount: {
      import: path.resolve(
        __dirname,
        "./__test__/src/pages/verifyAccount/verifyAccount.js"
      ),
    },
    signIn: {
      import: path.resolve(__dirname, "./__test__/src/pages/signIn/signIn.js"),
    },
    setUpAccount: {
      import: path.resolve(
        __dirname,
        "./__test__/src/pages/setUpAccount/setUpAccount.js"
      ),
    },
    organizations: {
      import: path.resolve(
        __dirname,
        "./__test__/src/pages/organizations/organizations.js"
      ),
    },
    organization: {
      import: path.resolve(
        __dirname,
        "./__test__/src/pages/organization/organization.js"
      ),
    },
    membersApproval: {
      import: path.resolve(
        __dirname,
        "./__test__/src/pages/membersApproval/membersApproval.js"
      ),
    },
    eventsProposal: {
      import: path.resolve(
        __dirname,
        "./__test__/src/pages/eventsProposal/eventsProposal.js"
      ),
    },
    eventsApproval: {
      import: path.resolve(
        __dirname,
        "./__test__/src/pages/eventsApproval/eventsApproval.js"
      ),
    },
    publish: {
      import: path.resolve(__dirname, "./__test__/src/pages/publish/publish.js")
    },
    test: {
      import: path.resolve(__dirname, "./__test__/src/pages/test/test.js"),
    },
  },

  output: {
    path: path.resolve(__dirname, "__test__/dist/assets"),
    filename: "[name].bundle.js",
    assetModuleFilename: "[hash][ext]",
    clean: true,
  },
  watch: true,

  //loadersS
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
        test: /\.(png|jpg|png|webp|avif|woff|woff2|svg)$/,
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

  resolve: {
    alias: {
      Assets: path.resolve(__dirname, "__test__/assets"),
      Common: path.resolve(__dirname, "__test__/common"),
    },
  },
  cache: {
    type: "filesystem",
    allowCollectingMemory: true,
  },

  //pulgins
  plugins: [
    //Add for each Page
    ...[
      "signup",
      "verifyEmail",
      "signIn",
      "verifyAccount",
      "setUpAccount",
      "organizations",
      "membersApproval",
      "organization",
      "test",
      "eventsProposal",
      "eventsApproval",
      "publish",
    ].map((e) => {
      return new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, "__test__/dist/" + e + ".html"),
        chunks: [e],
        template: path.resolve(
          __dirname,
          "__test__/src/pages/" + e + "/" + e + ".html"
        ),
      });
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
    liveReload: true,
    watchFiles: [
      "__test__/**/*",
      "__test__/**/**/*",
      "__test__/**/**/**/*",
      "__test__/**/**/**/**/*",
      "__test__/**/**/**/**/**/*",
    ],
    hot: false,
    compress: true,
    port: 8080,
    open: true,
  },
  optimization: {
    emitOnErrors: false,
    chunkIds: "named",
    splitChunks: {
      chunks: "all",
    },
  },
};
