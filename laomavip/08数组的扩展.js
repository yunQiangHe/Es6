/**
 * 数组的扩展
 */

//  1 扩展运算符(...)spread 将数组转为用逗号分隔的参数序列
function push(array, ...items) {
    array.push(...items);
}

function add(x, y) {
    return x + y;
}

const numbers = [4, 38];
add(...numbers);
// 以上两个列子可以看出  扩展运算符主要用于函数的调用

// 1.1 扩展运算符与正常的函数参数可以结合使用，非常灵活
// 1.2 扩展运算符后面还可以放置表达式
// 1.3 代替applay方法 将数组转为函数的参数
// egs:
function f(x, y, z) {
    console.log(arguments);
}
let args = [1, 2, 3];
f.apply(null, args); //es5
f(...args); //es6 扩展运算符
// egs:
let maxValue = Math.max.apply(null, args); //es5
console.log(maxValue);
let maxValue2 = Math.max(...args); //es6
console.log(maxValue2);


/**
 * 扩展运算符的应用
 */
// No1: 复制数组
// 数组是复合的数据类型 直接复制的话 只是复制了指向底层数据结构的指针
// 而不是克隆一个新的数组
const a1 = [1, 2];
const a2 = a1.concat();//ES5 只能用变通方法来复制数组
const a3 = [...a1]; //扩展运算符提供了复制数组的简便写法
const [...a4] = a1;

// No2: 合并数组
// concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
const aa4 = ['a', 'b', 'c', 'd'];
const aa3 = ['a1', 'b2', 'c3', 'd4'];
let newArray = a1.concat(aa4, aa3); //es5
console.log(newArray);
let newArray2 = [...a1, ...aa4, ...aa3]; //es6
console.log(newArray2);

// No3: 扩展运算符可以与解构赋值结合起来，用于生成数组。
/*
    const [first, ...rest] = [1, 2, 3, 4, 5];
    first // 1
    rest  // [2, 3, 4, 5]

    const [first, ...rest] = [];
    first // undefined
    rest  // []

    const [first, ...rest] = ["foo"];
    first  // "foo"
    rest   // []
*/

// No4: 扩展运算符还可以将字符串转为真正的数组。
console.log([...'hello']); //[ "h", "e", "l", "l", "o" ]

// No5: 实现了 Iterator 接口的对象  ???
let nodeList  = document.querySelectorAll("li");
let array = [...nodeList];
console.log(nodeList); //返回的是NodeList对象 不是数组 类似数组
console.log(array);

// No6: Map 和 Set 结构，Generator 函数 ???