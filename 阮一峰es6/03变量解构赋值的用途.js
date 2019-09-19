/****   1.交换变量    ***/
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log("x="+x);
console.log("y="+y);

/****   2.从函数返回多个值    ***/

// 函数只能返回一个值，如果要返回多个值，只能将他们放在数组或者对象里返回
// 有了解构 取出这些值就非常方便

// 返回一个数组
function f(){
    return [1,2,3]
}
let [a,b,c] = f();

// 返回对象
function f2(){
    return {
        foo:1,
        bar:2
    }
}
let {bar,foo} = f2();

/****   3. 函数参数的定义    ***/
// 解构赋值可以方便的将一组参数与变量名对应起来

// 参数是一组有次序的值
// function f([x, y, z]) {  }
// f([1, 2, 3]);

// // 参数是一组无次序的值
// function f({x, y, z}) {  }
// f({z: 3, y: 2, x: 1});

/************   4. 提出JSON数据    ***********/
let jsonData = {
    id: 42,
    name: "heyunqiang",
    status: "ok",
    list:[
        {id:1,uname:"No1",age:12},
        {id:2,uname:"No2",age:13}
    ]
}
let { id, status, list } = jsonData;  //快速提出JSON数据的值

console.log(id);
console.log(status);
console.log(list); 

/************   5. 函数参数的默认值    ***********/
jQuery.ajax = function (url, {
    async = true,
    beforeSend = function () {},
    cache = true,
    complete = function () {},
    crossDomain = false,
    global = true,
    // ... more config
  } = {}) {
    // ... do stuff
  };
//指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句



/*********************************   6. 遍历Map结构  ？？？  **************************************************/
// 任何部署了 Iterator 接口的对象，都可以用for...of循环遍历。
// Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。

const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world
// 如果只想获取键名，或者只想获取键值，可以写成下面这样。

// 获取键名
for (let [key] of map) {
  // ...
}

// 获取键值
for (let [,value] of map) {
  // ...
}


/*********************************   7.输入模块指定的方法  **************************************************/
// 加载模块时候 往往需要指定输入那些方法 解构赋值让输入语句非常清晰
const { SourceMapConsumer, SourceNode } = require("source-map");
