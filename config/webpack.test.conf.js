const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const Copy = require('copy-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}

const testWebpackConfig = {
  output: {
    publicPath: './',
  },
  plugins: [
    // 定义环境变量为测试环境
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('test'),
      isDevelopment: false
    }),
    // 将打包后的资源注入到html文件内
    new HtmlWebpackPlugin({
      template: resolve('../src/index.html')
    }),
    // 多核压缩代码
    new ParallelUglifyPlugin({
      cacheDir: '.cache/',
      uglifyJS: {
        output: {
          comments: false
        },
        compress: {
          warning: false
        }
      }
    }),
    // 分析代码
    new BundleAnalyzerPlugin({analyzerMode: 'static'}),
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '../'),
      verbose: false
    })
  ]
}

module.exports = merge(baseWebpackConfig, testWebpackConfig)