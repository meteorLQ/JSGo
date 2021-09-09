/**
 * 在node中,每一个js文件中的js代码都是独立运行在一个函数中,
 * 而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问
 */
console.log("hello world node!");
//向外部暴露属性和方法
exports.x = 10;
exports.a = 1;

exports.call= ()=>{
    console.log("初次见面，请多关照！");
}