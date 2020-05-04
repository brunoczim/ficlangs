const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const outputDir = path.join(__dirname, 'dist/')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    'index': './src/Index.bs.js',
    'star/index': './src/Star_Index.bs.js',
    'star/phonology': './src/Star_Phonology.bs.js',
    'star/texts/index': './src/Star_Texts_Index.bs.js',
    'star/texts/creation-of-the-world':
      './src/Star_Texts_CreationOfTheWorld.bs.js'
  },
  mode: isProd ? 'production' : 'development',
  devtool: 'source-map',
  output: {
    path: outputDir,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: './src/star/index.html',
      filename: 'star/index.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: './src/star/phonology.html',
      filename: 'star/phonology.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: './src/star/texts/index.html',
      filename: 'star/texts/index.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: './src/star/texts/creation-of-the-world.html',
      filename: 'star/texts/creation-of-the-world.html',
      inject: false
    }),
    new CopyPlugin([
      'src/img',
      { from: 'src/img', to: 'img' },
    ]),
  ],
  devServer: {
    compress: true,
    contentBase: outputDir,
    port: process.env.PORT || 8000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.ttf$/,
        use: ['url-loader']
      },
    ]
  }
}
