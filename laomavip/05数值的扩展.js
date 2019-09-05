// 二进制 八进制 的表示
// Number.isNaN()用来检查一个值是否为NaN。
let num = Number.isNaN(NaN);
console.log(num);
// Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。
let num2 = Number.isFinite(1234);
console.log(num2);

// 它们与传统的全局方法isFinite()和isNaN()的区别在于，
// 传统方法先调用Number()将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效，
// Number.isFinite()对于非数值一律返回false, 
// Number.isNaN()只有对于NaN才返回true，非NaN一律返回false。


// ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。
Number.parseFloat("123.00")
Number.parseInt("234.2")

// Number.isInteger()用来判断一个数值是否为整数。
let num3 = Number.isInteger(123.00);
let num5 = Number.isInteger(123);
// JavaScript 内部，整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值。
let num4 = Number.isInteger('123.00');
// 如果参数不是数值，Number.isInteger返回false
console.log(num3); //ture
console.log(num4); //false
console.log(num5); //ture


// 数值 (-2^53 ~ 2^53) 参考java

// Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内。

// ES2016 新增了一个指数运算符（**）
console.log(2 ** 2);
console.log(2 ** 3);
console.log(3 ** 3);

// ES6 在 Math 对象上新增了 17 个与数学相关的方法。所有这些方法都是静态方法，只能在 Math 对象上调用。

console.log(Math);
// Math.trunc方法用于去除一个数的小数部分，返回整数部分。
// 对于非数值，Math.trunc内部使用Number方法将其先转为数值。
// 对于空值和无法截取整数的值，返回NaN。
