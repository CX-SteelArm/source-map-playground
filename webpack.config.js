const path = require('path')

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              exclude: /node_modules/
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    }
  }
}
