/**
 * 数组的扩展
 */

// 1. Array.from(arrayLike[, mapFn[, thisArg]])
// array-like Object => array
// 可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map) => array

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
// es5
// slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
var arr1 = [].slice.call(arrayLike);
var arr2 = Array.from(arrayLike);
// var arr3 = [...arrayLike]; //object is not iterable (cannot read property Symbol(Symbol.iterator))
console.log(arrayLike);
console.log(arr1);
console.log(arr2);
// console.log(arr3); 

// 实际应用中，常见的类似数组的对象是 DOM 操作返回的 NodeList 集合
// 以及函数内部的arguments对象。Array.from都可以将它们转为真正的数组。

let lis = document.querySelectorAll("li");
console.log(lis); //NodeList
let lisnew = Array.from(lis);
console.log(lisnew); //Array
Array.from(lis).filter(item => item.innerText = "js插入的文本");

function foo(){
    console.log(arguments);
    let args = Array.from(arguments);
    console.log(args);
    let args2 = [...arguments]
    console.log(args2);
}
foo(arrayLike,1,2);
/**
 * 类数组 =》 数组
 * 封装 兼容 转换数组
 */

const toArray = (() =>
  Array.from ? Array.from : obj => [].slice.call(obj)
)();

let a = toArray(arrayLike);
console.log(a);
/**
 * 数组去重合并
 * 参考
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from#%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D%E5%90%88%E5%B9%B6
 */



 /**
  * 2. Array.of()
  */