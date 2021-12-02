// any  任意类型
let a: any;
a = 1;
a = '2';
a = false;
let b;
// unknown  表示未知类型的值
let e: unknown;
e = 10;
e = "hello";
e = false;
// 类型断言
/**
 * 两种写法
 * 变量 as 类型
 * <类型>变量
 */
let s: string;
s = e as string;

// void表示空，以函数为例，就表示没有返回值的函数
function f1(): void {

}

// never 表示永远不会有返回结果
function f2(): never {
    throw new Error('报错了！');
}

// object 表示一个js对象
// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名:属性值}
// 其中？用来表示可选值
let o: object;

let p: { name: string, age?: number };
let y: { name: string, [popname: string]: any }
let x: (a: number, b: number) => number;

// string[] 表示字符串数组
let k: string[];
e = ['a', 'b', 'c'];
// number[] 数组类型数组
let n:number[];
let f:Array<number>;
/**
 * 元组，元组就是固定长度的数组
 */
let h:[string,string];
h=['2','3']
/**
 * enum 枚举
 */
enum Gender{
    man,
    wman
}
let i:{name:string,gender:Gender};
i={name:'擎天柱',gender:Gender.man}
// 类型别名
type  mytype=1|2|3;
let v:mytype;
v=1;
v=2;
























