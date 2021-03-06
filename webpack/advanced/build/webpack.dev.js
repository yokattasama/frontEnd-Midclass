const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
  mode: 'development',
  watch: true,
  devServer: {
    open: true,
    port: 8080,
    contentBase: './src',
    hot: true,
    compress: true,
    proxy: {
      '/api': {
        target: 'http://localhost:9999',
        pathRewrite: {
          '^/api': '',
        }
      } 
    }
  },
  devtool: 'cheap-eval-source-map'
})

// 不适用参数，可以在 config.js 中的 devServer 进行配置
// package.json 中配置， json 文件不能写注释，所以写到这儿
// 如果 index.html 不在根目录中，则使用 命令行参数 --contentBase 指定目录
// 加上 --port [端口号] 可以将 devserver 运行在指定端口
// 加上 --hot 可以将当前修改作为 补丁 加上去，提高加载速度
// --compress 可以压缩 js 文件
// 加上 --open 参数， 可以自动打开浏览器
// "dev": "webpack-dev-server --contentBase src"