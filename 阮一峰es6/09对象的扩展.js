// 1. 属性的简洁表示法
// 2. 属性名表达式
// 3. 方法的 name 属性
// 4. 属性的可枚举性和遍历
// 5. super 关键字
// 6. 对象的扩展运算符


// 1.ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。
let brith = "19911101";
const person = {
    name: "heyunqiang",
    brith,
    hello(){
        console.log(this.name+"---"+this.brith);
    }
}
console.log(person);
// 这种写法用于函数的返回值，将会非常方便。
function f(x, y) {
    return { x, y }
}
let temp = f(1, 2);
console.log(temp); //{x: 1, y: 2}


// CommonJS 模块输出一组变量，就非常合适使用简洁写法
// module.exports = { getItem, setItem, clear };

// 等同于

// module.exports = {
//   getItem: getItem,
//   setItem: setItem,
//   clear: clear
// };

// 2.ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内。

// 3.对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象
let a = Object.getOwnPropertyDescriptor(person,"name");
console.log(a);
// {value: "heyunqiang", writable: true, enumerable: true, configurable: true}
