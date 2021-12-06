// 引入一个包
//  npm i -D webpack webpack-cli typescript ts-loader
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    // mode: 'development',
    mode: 'production',
    // 指定入口文件
    entry: './src/index.ts',
    // 指定输出目录
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                // 匹配哪些文件
                test: /\.ts$/,
                use: [
                    // 设置babel
                    {
                        // 指定加载器
                        loader:"babel-loader",
                        // 设置babel
                        options:{
                            //设置预定义的环境
                            presets:[
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 兼容的目标浏览器
                                        targets:{
                                            "chrome":"88"
                                        },
                                        // 指定corejs的版本
                                        "corejs":"3",
                                        // 使用corejs的方式"usage"表示按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'

                ],
                exclude: /node_modules$/,
            },
            {
                // 匹配哪些文件
                test: /\.less$/,
                // 使用哪些loader进行处理
                use: [
                    // use数组中loader执行顺序：从右到左,从上到下 依次执行
                    // 创建style标签,将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    //将css文件变成commonjs模块加载js中，里面内容是样式字符串
                    'css-loader',
                    'less-loader'
                ]
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
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
    // 设置引用模块
    resolve:{
        extensions:['.ts','.js']
    }
}