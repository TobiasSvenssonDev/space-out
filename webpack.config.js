const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Space-Out',
      header: 'Space-Out',
      metaDesc: 'Space-Out',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  mode: 'development',
  output: {
    clean: true
  },
  devServer: {
    static: './dist',
    open: true
  }
};