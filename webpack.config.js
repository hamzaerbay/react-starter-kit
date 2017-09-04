const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
module.exports = {
  entry: './src/js/app.js',
  module: {
      rules: [
        {//sass config
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [ 'css-loader', 'sass-loader']
          }
        )
      },
      {//js config
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {//devserver
    contentBase: path.join(__dirname),
    compress: true,
    port: 9000,
    stats:'errors-only',
    open: true,
  },
  plugins: [//sass config
    new ExtractTextPlugin({
      allChunks: true,
      filename: './dist/styles.css'
    })
  ],
  output: {//project base

    path: path.resolve(__dirname),
    filename: './dist/app.bundle.js'
  }
}
