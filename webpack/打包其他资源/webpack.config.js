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
                // 匹配哪些文件
                test: /\.css$/,
                // 使用哪些loader进行处理
                use: [
                    // use数组中loader执行顺序：从右到左,从上到下 依次执行
                    // 创建style标签,将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    //将css文件变成commonjs模块加载js中，里面内容是样式字符串
                    'css-loader'
                ]
            },
            {
                exclude: /\.(css|js|html)$/,
                loader: 'file-loader'
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