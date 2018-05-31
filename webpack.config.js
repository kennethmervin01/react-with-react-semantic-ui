var ExtractTextPlugin = require("mini-css-extract-plugin")
const path = require('path')
const webpack = require('webpack')

module.exports =
{
  entry: './src/index.js',

  output:
  {
    path: path.resolve(__dirname,'build'),
    filename: 'index.bundle.js'
  },

  module:
  {
    rules: [
      {
        test: /\.js$/,
        exclude: ['/node_modules/'],
        loader:['babel-loader']
      },

      {
        test: /\.css$/,
        use: [
          ExtractTextPlugin.loader,
          "css-loader"
        ]
      },

      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        loader: 'url-loader?limit=100000'
      }

    ]
  },

  devtool: 'inline-source-map',

  resolve:
  {
    extensions: ['.js', '.jsx']
  },

  devServer:
  {
    contentBase:'./build',
    port:'3000'
  },

  plugins: [
    new ExtractTextPlugin({
      filename: "style.css",
    })
  ]

}
