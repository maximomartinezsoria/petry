const HtmlWebpackPlugin = require('html-webpack-plugin')

exports.default = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  devServer: {
    open: true,
    historyApiFallback: true
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
