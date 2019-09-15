// 函数的扩展

// 1.函数参数的默认值

// ES6之前，不能直接指定函数的参数指定默认值 只能采用变通的办法
function beforees6(x, y) {
    x = x || "默认值";
    y = y || "默认值";
    return x + "*" + y;
}

let total = beforees6(1, 0);
console.log(total);
// 分析缺点  => 上面的列子 如果y赋值了y=false 改赋值不起作用
// 为了避免这个问题  => 通常检测下y是否被赋值了
// if(typeof y ==== "undefiend"){
//     y = "默认值"
// }

// es6写法
function f(x = 1, y = 2) {
    // 注意 参数变量是默认声明的 所以不能用let const再次声明
    // let x = 99;  //Uncaught SyntaxError: Identifier 'x' has already been declared
    return x + y;
}
let sum = f(2, false);
console.log(sum);
// 除了简洁，ES6 的写法还有两个好处：
// 首先，阅读代码的人，可以立刻意识到哪些参数是可以省略的，不用查看函数体或文档；
// 其次，有利于将来的代码优化，即使未来的版本在对外接口中，彻底拿掉这个参数，也不会导致以前的代码无法运行

// 函数参数默认值 与 解构默认值 结合使用 
function foo({ x, y = 1 }) {
    console.log(x, y);
}
foo({}); //undefined 1
foo({ x: 1 }); //1 1
foo({ x: 2, y: 2 }); //2 2
// 上面代码只使用了对象的解构赋值默认值，没有使用函数参数的默认值。
//foo(); // Cannot destructure property `x` of 'undefined' or 'null'.
// 改造
function fooNew({ x, y = 1 } = {}) {
    console.log(x, y);
}
fooNew();//undefined 1
fooNew({});//undefined 1
// 下面是另一个解构赋值默认值的例子
function fetch(url, { body = '', method = 'GET', headers = {} }) {
    console.log(method);
}
fetch('http://example.com', {}) //GET
// fetch('http://example.com')  error
// 改造
function fetchNew(url, { body = '', method = 'GET', headers = {} } = {}) {
    console.log(method);
}
fetchNew('http://example.com', {}) //GET
fetchNew('http://example.com')

// 函数参数默认值的位子
// 通常情况下 定义默认值的参数 应该是函数的尾参数
// 因为这样比较容易看出来，到底省略了哪些参数。
// 如果非尾部的参数设置默认值，实际上这个参数是没法省略的。

function f(x = 1, y) {
    console.log([x, y]);
}
f();// 1 undefiend
f(11); //11 undefiend
f(11,22); //11 22
// f(,22);  //error
f(undefined,22);  //1 ,22
// 上面代码中，有默认值的参数都不是尾参数。
// 这时，无法只省略该参数，而不省略它后面的参数，除非显式输入undefined
// 如果传入undefined，将触发该参数等于默认值，null则没有这个效果。 因为比较 参数 === Undefined


// 函数的 length 属性
// (function (a) {}).length // 1
// (function (a = 5) {}).length // 0
// (function (a, b, c = 5) {}).length // 2
// 上面代码中，length属性的返回值，等于函数的参数个数减去指定了默认值的参数个数。

// 作用域 ********
// 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。
// 等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。
var x = 1;
function fn(x, y = x) {
  console.log(y);
}
fn(2) // 2


// 应用
// 1.利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。
function throwIfMissing() {
    throw new Error('Missing parameter');
}
  
function fooTest(mustBeProvided = throwIfMissing()) {
    return mustBeProvided;
}
// fooTest()// Error: Missing parameter
  
// 2另外，可以将参数默认值设为undefined，表明这个参数是可以省略的。
// function foor(optional = undefined) {  }


// 2. reset
// ES6 引入reset参数获取函数多余的参数。reset搭配的变量是一个数组
function resetfun(...values){
    console.log("你好");
    console.log(values);
}
resetfun(1,2,3);

function getSum(...values){
    console.log("arguments");
    console.log(arguments); //arguments对象不是数组，而是一个类似数组的对象。
    // 转成数组
    console.log("转成数组");
    console.log(Array.prototype.slice.call(arguments));
    let sum = 0;
    for(var v of values){
        sum += v;
    }
    return sum;
}
console.log(getSum(1,2,3,4));

// 3.箭头函数
// 箭头函数使用注意事项
// 3.1 函数体内的this对象，就是定时所在的对象，而不是使用时所在的对象。
// 3.2 不可以当做干燥函数 也就是说不可以使用new命令
// 3.3 不可以使用arguments对象，该对象在函数体内不存在。如果要用 可以用rest参数替代
// 3.4 不可以使用yield命令 因此箭头函数不能用作generator函数
console.log("-----------------箭头函数----------------");
function fooo1(){
    setTimeout(function(){
        console.log("id"+this.id); //21
    },100);
}

function fooo2(){
    setTimeout(()=>{
        console.log("id"+this.id); //42
    },100);
}
var id = 21;
fooo1.call({id:42});
fooo2.call({id:42});

console.log("-----------------箭头函数----------------");
// 什么是尾调用？   是函数式编程的一个重要概念 一句话 就是指某个函数的最后一步是调用另一个函数。

