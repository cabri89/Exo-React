// var fs = require('fs');

//  @ag: include html-webpack-plugin to render HTML/EJS templates
var HTMLWebpackPlugin = require('html-webpack-plugin');
//  @ag: include extract-text-webpack-plugin to render stylesheets files
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// @ag: include path node core module to work properly with absolute pathes
var path = require('path');
// @ag: include webpack to enable hot module replacement feature (HMR)
var webpack = require('webpack');
// @ag : checks if CSS should be included in a file (prod) or inline-generated via HMR
var isProduction = process.env.NODE_ENV === "production";
// @ag : if dev, let's use loaders (loades from left to right)
var cssDev = ["style-loader", "css-loader", "sass-loader"];
// @ag : else if prod, lets bundle our styles in a file to specified location
var cssProd = ExtractTextPlugin.extract({
  fallback: "style-loader",
  use: [
    "css-loader", "sass-loader"
  ],
  publicPath: "./dist"
});
var cssConfig = (isProduction)
  ? cssProd
  : cssDev;

module.exports = {
  // @ag : enable multiple entry points
  entry: {
    app: "./src/index.js",
  },
  // @ag: tells webpack we are building for node
  // target: "node",
  target: "web",
  // @ag: Node module dependencies should not be bundled
  externals: {
    'express': 'commonjs express'
  },
  output: {
    // @ag : set path and filename to output the app as prod distribution
    path: path.resolve(__dirname, "dist"),
    // @ag : [name] references current entry name
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: [".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: cssConfig
      }, {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: "babel-loader"
      }, {
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader", "babel-loader"]
      }, {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: ["file-loader?name=[name].[ext]&outputPath=/assets/img/", "image-webpack-loader?bypassOnDebug"]
      }, {
        test: /\.json$/,
        loader: "json",
      }
    ]
  },
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, "dist"),
    // @ag : enabes hot reload feature
    hot: true,
    // @ag : automaticaly opens a browser window on build
    open: true,
    // @ag : set the listening port
    port: 3000,
    // @ag : avoids verbose logs in shell console
    stats: "errors-only"
  },
  plugins: [
    new ExtractTextPlugin({
      allChunks: true,
      disable: !isProduction,
      filename: "styles.css"
    }),
    new HTMLWebpackPlugin({
      // @ag : set a time hash for scripts and stylesheets
      hash: true,
      // @ag : determines where to output scripts (ex: "head" | "body")
      inject: "body",
      // @ag : setup minify option
      minify: {
        collapseWhitespace: false
      },
      excludeChunks: ["blog"],
      // @ag : determines wich template must be used for this module
      template: path.resolve(__dirname, "src/templates/index.ejs"),
      title: "node-kickstarter - home"
    }),

    // @ag : loads Hot Module Replacement (HMR) gobally
    new webpack.HotModuleReplacementPlugin(),
    // @ag : renders more readable modules names in browser console
    new webpack.NamedModulesPlugin()
  ],
  // node: {
  //   fs: "empty",
  //   net: "empty"
  // }
};
