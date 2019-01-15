const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

const cleanDist = new CleanWebpackPlugin(['dist']);
const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
  title: 'Caching',
});
const miniCssPlugin = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css',
});
const styleLintPlugin = new StyleLintPlugin({ configFile: './.stylelintrc', emitErrors: false });

module.exports = {
  output: {
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitErrors: true,
          emitWarning: true,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'svg-react-loader',
      },
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader', {
            loader: 'sass-loader',
            options: {
              includePaths: ['node_modules'],
            },
          }],
      },
    ],
  },
  plugins: [cleanDist, htmlPlugin, styleLintPlugin, miniCssPlugin],
  devServer: {
    port: 9000,
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
  },
};
