/**
 * webpack.config.js webpack的配置文件
 * 作用:指示webpack干哪些活(执行webpack时,会加载里面的配置)
 * 所有构建工具都是基于node.js平台运行~模块化默认采用common.js
 */


const {resolve} = require('path');
module.exports = {
    // 入口起点
    entry: './src/index.js',
    // 输出
    output: {
        // 输出文件名
        filename: 'built.js',
        // 输出路径 __dirname nodejs的变量，代表当前文件的目录绝对路径
        path: resolve(__dirname, 'build')
    },
    // loader的配置
    module: {
        //详细loader配置
        rules: [
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
            }
        ]
    },
    // plugins的配置
    plugins: [
        //详细plugins的配置
    ],
    mode: 'development'
    // mode: 'production'
}