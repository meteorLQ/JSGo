/*
loader： 1.下载 2.使用（配置loader）
plugins: 1.下载 2.引入 3.使用

 */
const {resolve} = require('path');
let html = require('html-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // loader的配置
        ]
    },
    plugins: [
        // plugins的配置
        // html-webpack-plugin
        // 功能:默认会创建一个空的html，自动引入打包输出的所有资源（js/css）
        // 需求：需要有结构的html文件
        new HtmlWebpackPlugin(
            {
                // 复制一个html文件,并自动引入打包输出的所有资源（js/css）
                template: './src/index.html'
            }
        )
    ],
    mode: 'development',
    // 开发服务器 devServer: 用来自动化（自动编译，自动打开浏览器，自动刷新浏览器）
    // 特点：只会在内存中编译打包，不会有任何输出
    // 启动devServer指令为：npx webpack-dev-server
    devServer: {
        // 项目构建后路径
        // contentBase: resolve(__dirname, 'build'),
        // 启动gzip压缩
        compress: true,
        // 端口
        port: 3000,
        // 自动打开浏览器
        open: true
    }


}