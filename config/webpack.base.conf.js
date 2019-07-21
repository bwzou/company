const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const os = require('os')
const HappyPack = require('happypack')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}

const baseWebpackConfig = {
  entry: {
    index: resolve('../src/index.js'),
  },
  output: {
    path: resolve('../dist'),
    filename: '[name].[hash:4].js',
    chunkFilename: 'chunks/[name].[hash:4].js'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@app': path.join(__dirname, '../src'),
      '@apis': path.join(__dirname, '../src/apis'),
      '@common': path.join(__dirname, '../src/common'),
      '@reg': path.join(__dirname, '../src/common/regExp.js'),
      '@mocks': path.join(__dirname, '../src/mocks'),
      '@redux': path.join(__dirname, '../src/redux/index.js'),
      '@actions': path.join(__dirname, '../src/redux/actions'),
      '@reducers': path.join(__dirname, '../src/redux/reducers'),
      '@styles': path.join(__dirname, '../src/styles'),
      '@views': path.join(__dirname, '../src/views')
    },
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1
    }
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        include: [resolve('../src')],
        //把对.js 的文件处理交给id 为happyBabel 的HappyPack 的实例执行
        loader: 'happypack/loader?id=happyBabel',
      },
      {
        test: /\.(css|less)$/,
        include: [
          resolve('../src/styles')
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'happypack/loader?id=happyStyle'
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        exclude: /node_modules/,
        include: [resolve('../src/images')],
        loader: 'url',
        options: {
          limit: 8192,
          name: 'img/[name].[hash:4].[ext]'
        }
      },
      {
        test: /\.(woff|eot|ttf|svg|gif)$/,
        loader: 'url',
        options: {
          limit: 8192,
          name: 'font/[name].[hash:4].[ext]'
        }
      }
    ]
  },
  plugins: [
    // 去除moment的语言包
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de|fr|hu/),
    new HappyPack({
      // 用id来标识happypack 处理文件
      id: 'happyBabel',
      // 如何处理用法和loader 的配置一样
      loaders: [{
        loader: 'babel?cacheDirectory=true',
      }],
      // 代表共享进程池，即多个HappyPack 实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多
      threadPool: happyThreadPool,
      // 允许HappyPack 输出日志
      verbose: true,
    }),
    new HappyPack({
      // 用id来标识happypack 处理文件
      id: 'happyStyle',
      // 如何处理用法和loader 的配置一样
      loaders: [ 'css-loader?sourceMap=true', 'less-loader?sourceMap=true' ],
      // 代表共享进程池，即多个HappyPack 实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多
      threadPool: happyThreadPool,
      // 允许HappyPack 输出日志
      verbose: true,
    }),
    // 提取css
    new MiniCssExtractPlugin({filename: 'style.[hash:4].css'})
  ]
}

module.exports = baseWebpackConfig