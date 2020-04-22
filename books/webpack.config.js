const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const outputDir = path.join(__dirname, "dist/")

const isProd = process.env.NODE_ENV === "production"

module.exports = {
  entry: {
    "creation-of-the-world": "./src/CreationOfTheWorld.bs.js"
  },
  mode: isProd ? "production" : "development",
  devtool: "source-map",
  output: {
    path: outputDir,
    filename: "[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/creation-of-the-world.html",
      inject: false
    })
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
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.ttf$/,
        use: ["file-loader"]
      }
    ]
  }
}
