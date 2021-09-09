/*
* 在node中有一个全局对象global,它的作用和网页中window类似，
* 在全局中创建的变量都会作为global的属性保存，
* 在全局创建的函数都会作为global的方法保存
* */
var a = 10;
// console.log(global.a)
console.log(argnuments.callee)