const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: 'head',
      scriptLoading: 'defer'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              esModule: false
            }
          }
        ]
      }
    ]
  }
}
