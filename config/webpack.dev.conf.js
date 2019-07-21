const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const HtmlWebpackPlugin= require('html-webpack-plugin')

const port = 8888
function resolve(relatePath) {
  return path.join(__dirname, relatePath)
}
const devWepackConfig = {
  plugins: [
    // 定义环境变量为开发环境
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      isDevelopment: true
    }),
    new HtmlWebpackPlugin({
      template: resolve('../src/index.html')
    }),
    new OpenBrowserPlugin({
      url: `http://localhost:${port}`,
    }),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: resolve('../src'),
    historyApiFallback: false,
    hot: false,
    host: '0.0.0.0',
    port: port
  }
}

module.exports = merge(baseWebpackConfig, devWepackConfig)