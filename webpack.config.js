const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV || "development",
  context: __dirname + "/src",
  entry: {
    "main": "./client/main.js",
    "push.service-worker": "./client/push.service-worker.js"
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].js",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  }
}