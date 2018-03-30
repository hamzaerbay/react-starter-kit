const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', {
            loader: 'sass-loader',
            options: {
              includePaths: ['node_modules', 'src', '.'],
            },
          }],
        }),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    // port: 9000,
    stats: 'errors-only',
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new ExtractTextPlugin({
      allChunks: true,
      filename: './dist/styles.css',
    }),
    new StyleLintPlugin('.stylelint.json'),
  ],
  output: {
    path: path.resolve(__dirname),
    filename: './dist/app.bundle.js',
  },
};
