// 1.数组的解构赋值
let [a, b, c] = [1, 2, 3];
console.log(a);
console.log(b);
console.log(c);

let [foo, [[bar], baz]] = [11, [[22], 33]];
console.log(foo);
console.log(bar);
console.log(baz);

let [x, ...y] = [1, 2, 3, 4, 5];
console.log(x); //1
console.log(y); //[2,3,4,5]

let [n, m, ...k] = ["a"];
console.log(n); //"a"
console.log(m); //undefiend  如果解构不成功变量的值就等于undefined
console.log(k); //[]

// 解构赋值允许指定默认值
let [t1 = true] = [];
console.log(t1); //true
// ES6内部使用严格的相等运算符 === 判断一个位置是否有值
// 所以只有当一个组数成员严格等于undefiened 默认值才会有效
let [t2 = "默认值t2"] = [undefined];
let [t3 = "默认值t3"] = [null];
console.log(t2);
console.log(t3);

let [t4 = f()] = [11];
let [t5 = f()] = [];
// 如果默认值是一个表达式 那么这个表达式是惰性求值的
// 只有在用到的时候才会求值
function f() {
    console.log("aaa");
    return 'aaa';
}
console.log("t4===" + t4);
console.log("t5===" + t5);

// let [i = 1, kk = i] = [99, 88]; // 99 88
// let [i = 1, kk = i] = []; //输出 1  1
let [i = 1, kk = i] = [99]; //输出 99 99
// 默认值也可以解构赋值到其它变量  但该变量必须已经声明
console.log(i);
console.log(kk);