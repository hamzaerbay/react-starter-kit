const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractLess = new ExtractTextPlugin({//less config
  filename: "./dist/style.min.css",
  // disable: process.env.NODE_ENV === "development"
  // filename: "./dist/[name].[contenthash].css"
});
const path = require('path');
module.exports = {
  entry: './src/js/app.js',
  module: {
    rules: [
      {//less config
        test: /\.less$/,
        use: extractLess.extract({
          fallback: "style-loader",
          use: [{
              loader: "css-loader"
            }, {
              loader: "less-loader"
            }]
        })
      },
      {//js config
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devServer: {//devserver
    contentBase: path.join(__dirname),
    compress: true,
    // port: 9000,
    stats:"errors-only",
    open: true,
  },
  plugins: [//less config
    extractLess
  ],
  output: {//project base
    path: path.resolve(__dirname),
    filename: './dist/app.bundle.js'
  }
}
