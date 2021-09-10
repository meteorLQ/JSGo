/*
* 在node中有一个全局对象global,它的作用和网页中window类似，
* 在全局中创建的变量都会作为global的属性保存，
* 在全局创建的函数都会作为global的方法保存
* */
var a = 10;
// console.log(global.a)
console.log(arguments.callee + "")

/**
 * 实践商模块中代码都是由包装在一个函数中执行的，并且在函数执行中，同时传递了五个实参
 * function (exports, require, module, __filename, __dirname) {
var a = 10;
// console.log(global.a)
console.log(arguments.callee+"")
}
 */