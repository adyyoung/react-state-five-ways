const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  target: 'web',
  entry: [
    'babel-polyfill',
    path.resolve('src/app.js'),
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  output: {
    chunkFilename: '[chunkhash].main.js',
    filename: 'main.js',
    path: path.join(__dirname, '/dist/'),
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()],
  devtool: 'source-map',
  devServer: {
    port: 3000
  }
};
