const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
module.exports = {
  entry: './src/js/app.js',
  module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [ 'css-loader', 'sass-loader']
          }
        )
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    // port: 9000,
    stats:'errors-only',
    open: true,
  },
  plugins: [
    new ExtractTextPlugin({
      allChunks: true,
      filename: './dist/styles.css'
    })
  ],
  output: {

    path: path.resolve(__dirname),
    filename: './dist/app.bundle.js'
  }
}
