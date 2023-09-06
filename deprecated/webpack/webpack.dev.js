const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    port: 9000,
    compress: true,
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
  },
});
