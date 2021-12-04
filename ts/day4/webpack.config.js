// 引入一个包
//  npm i -D webpack webpack-cli typescript ts-loader
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: 'development',
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
                    // {
                    //     // 指定加载器
                    //     loader:"babel-loader",
                    //     // 设置babel
                    //     options:{
                    //         //设置预定义的环境
                    //         presets:[
                    //             [
                    //                 // 指定环境的插件
                    //                 "@babel/preset-env",
                    //                 // 配置信息
                    //                 {
                    //                     target:{
                    //                         "chrome":"88"
                    //                     },
                    //                     "corejs":"3",
                    //                     "useBuiltIns":"usage"
                    //                 }
                    //             ]
                    //         ]
                    //     }
                    // },

                    'ts-loader'

                ],
                exclude: /node_modules$/,

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