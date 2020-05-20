const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: ['@babel/polyfill', './src/main.js'],
  output: {
    // path.resolve 将相对路径 或者 绝对路径 解析为绝对路径
    // path: path.resolve('./dist/'),
    path: path.join(__dirname,'./dist/'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer: {
    open: true,
    port: 8080,
    contentBase: './src',
    hot: true,
    compress: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, '/assets'),
          to: 'assets',
        },
        {
          from: path.join(__dirname, '/static'),
          to: 'static',
        },
      ]
    }),
    new webpack.BannerPlugin('版权所有，复制必究'),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      { test: /\.less$/, use: ['style-loader','css-loader','less-loader']},
      { test: /\.s(a|c)ss$/, use: ['style-loader','css-loader','sass-loader']},
      { test: /\.(jpg|jpeg|png|bmp|gif)$/, use: {
        loader: 'url-loader',
        options: {
          limit: 5*1024,
          outputPath: 'images',
          name: '[name]_[hash:6].[ext]'
        }
      }},
      { test: /\.(eot|woff|woff2|ttf|svg|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:4].[ext]',
            outputPath: 'font'
          }
      }},
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: [
              '@babel/plugin-transform-runtime'
            ],
            exclude: /node_modules/
          }
        }
      }
    ]
  }
}
// 不适用参数，可以在 config.js 中的 devServer 进行配置
// package.json 中配置， json 文件不能写注释，所以写到这儿
// 如果 index.html 不在根目录中，则使用 命令行参数 --contentBase 指定目录
// 加上 --port [端口号] 可以将 devserver 运行在指定端口
// 加上 --hot 可以将当前修改作为 补丁 加上去，提高加载速度
// --compress 可以压缩 js 文件
// 加上 --open 参数， 可以自动打开浏览器
// "dev": "webpack-dev-server --contentBase src"