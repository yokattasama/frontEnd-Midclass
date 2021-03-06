const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
module.exports = {
  entry: './src/main.js',
  // {
  //   index: ['@babel/polyfill', './src/main.js'],
  //   other: ['@babel/polyfill', './src/other.js']
  // },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  output: {
    // path.resolve 将相对路径 或者 绝对路径 解析为绝对路径
    // path: path.resolve('./dist/'),
    path: path.join(__dirname, '..', './dist/'),
    filename: '[name].js',
    publicPath: '',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      // chunks: ['index']
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, '../dist/vue_dll.js')
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'other.html',
    //   template: './src/other.html',
    //   chunks: ['other']
    // }),
    // new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, '..', '/assets'),
          to: 'assets',
        },
        {
          from: path.join(__dirname, '..', '/static'),
          to: 'static',
        },
      ]
    }),
    // new webpack.BannerPlugin('版权所有，复制必究'),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new webpack.IgnorePlugin(/\.\/locale$/, /moment$/),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dist/manifest.json')
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader']
      },
      { test: /\.less$/, use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader','less-loader']},
      { test: /\.s(a|c)ss$/, use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader','sass-loader']},
      { test: /\.(jpg|jpeg|png|bmp|gif)$/, use: {
        loader: 'url-loader',
        options: {
          limit: 5*1024,
          outputPath: 'images',
          name: '[name]_[hash:6].[ext]',
          esModule: false, // 使用 html-withimg-loader 需要在 图片的 file-loader 配置中加上此项配置
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
      },
      {
        test: /\.(htm|html)$/,
        loader: 'html-withimg-loader'
      },
      // {
      //   test: require.resolve('jquery'),
      //   use: {
      //     loader: 'expose-loader',
      //     options: '$'
      //   }
      // }
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