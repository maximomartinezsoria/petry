const HtmlWebpackPlugin = require('html-webpack-plugin')

exports.default = {
  output: {
    filename: 'app.bundle.js'
  },
  devServer: {
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    })
  ]
}
