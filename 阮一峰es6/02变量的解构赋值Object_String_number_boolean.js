// 1.对象的解构赋值

// 对象解构和数组有一个重要的不同
// 数组的元素是按次序排列的 变量的取值由它的位置决定
// 对象的属性是没有顺序的 变量必须与属性同名 才能取得正确的值
let {
    foo,
    bar,
    test
} = {
    foo: "aa",
    bar: "bb"
};
// let { foo, bar, test } = {  bar: "bb" ,foo: "aa"};
console.log(foo); // aa
console.log(bar); // bb
console.log(test); //undefiend

// 如果变量民 和 属性名不一致？？？
let {
    first: f,
    last: l
} = {
    first: "Hello",
    last: "baby"
};
console.log(f); // hello 
console.log(l); // baby
// console.log(frist); // Uncaught ReferenceError: frist is not defined

// 实际上 对象的解构赋值是下面形式的简写
// 语法糖
// let { foo , bar } = { foo: "123", bar: 'bb' }; 简写形式
// let { foo: foo, bar: bar } = { foo: "123", bar: 'bb' };

// 与数组一样 解构也可以用于嵌套结构的对象
let obj = {
    p: [
        "hello",
        {
            y: "world"
        }
    ]
}

let {
    p: p1,
    p: [
        x,
        { y }
    ]
} = obj;
console.log(p1); //和obj一样
console.log(x);  // hello
console.log(y);  //world

const node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};

let { loc, loc: { start }, loc: { start: { line } } } = node;
line // 1
loc  // Object {start: Object}
start // Object {line: 1, column: 5}

// 嵌套赋值
let o = {};
let arr = [];
({foo: o.prop, bar: arr[0]} = { foo: "123", bar: 'bb' });
console.log(o);
console.log(arr);

// 对象解构 默认值
// 默认值 生效的条件 是 对象的属性值严格等于undefiend
let {k = "默认值"} = {};
console.log(k);

let { log: log1, sin, cos } = Math;
console.log(sin);
console.log(cos);
console.log(log1);
// 上面的代码将Math上 对数 正弦 余弦的是哪个方法 赋值到对应的变量上

// 由于数组也是特殊的对象 所有也可以对数组进行对象属性的解构
let arrlog = [1,2,3];
let {0: first, [arrlog.length-1]: last} = arrlog;
console.log(first); //1
console.log(last); //3


/*****************************************************************/
//   2.字符串的解构赋值
const [a,b,c] = "abc";
console.log(a);
console.log(b);
console.log(c);
/*****************************************************************/

// 解构赋值的规则是 只要等号右边的值不是对象 和 数组，就先将其转为对象。
// 由于null undefined无法转为对象 所有对他们进行解构赋值，都会报错。
let {toString: s1} = 123;
s1 === Number.prototype.toString // true

let {toString: s2} = true;
s2 === Boolean.prototype.toString // true

// let { prop: x } = undefined; // TypeError
// let { prop: y } = null; // TypeError

