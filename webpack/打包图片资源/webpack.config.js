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
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                // 下载url-loader file-loader
                loader: 'url-loader',
                options: {
                    // 图片大小小于8kb,就会被base64处理
                    limit: 8 * 1024,
                    // 关闭es6模块化
                    esModule: false
                },
            },
            {
                test: /\.html$/,
                // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
                loader: 'html-loader'
            }
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
    mode: 'development'
};