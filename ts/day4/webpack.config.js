// 引入一个包
//  npm i -D webpack webpack-cli typescript ts-loader
const path = require('path')
module.exports = {
    mode: 'development',
    // 指定入口文件
    entry:'./src/index.ts',
    // 指定输出目录
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                // 匹配哪些文件
                test:/\.ts$/,
                use:'ts-loader',
                exclude: /node_modules$/,

            }
        ]
    }
}