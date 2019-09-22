/**
 * 1.Set
 */

// ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
// Set本身是一个构造函数，用来生成 Set 数据结构
const s = new Set();
[1, 2, 2].forEach(x => s.add(x));
for (let i of s) {
    console.log(i);
}

// Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
const set = new Set([1, 2, 3, 1, 2, 3]);
console.log(set);
console.log([...set]);

// Set 实例的属性和方法
let s1 = new Set();
s1.add(1);
s1.add(2);
s1.add(3);
console.log(s1.size);
console.log(s1);
console.log(s1.has(2));
console.log(s1.has(4));
console.log(s1.delete(2));
console.log(s1.clear());
console.log(s1);

// Set 结构的实例有四个遍历方法，可以用于遍历成员。
// Set.prototype.keys()：返回键名的遍历器
// Set.prototype.values()：返回键值的遍历器
// Set.prototype.entries()：返回键值对的遍历器
// Set.prototype.forEach()：使用回调函数遍历每个成员

let mySet = new Set([{ a: 1 }, { a: 2 }]);
console.log(mySet);
console.log("----------------------------------------------------------------");
for(let item of mySet.keys()){
    console.log(item);
}
console.log("----------------------------------------------------------------");
for(let item of mySet.values()){
    console.log(item);
}
console.log("----------------------------------------------------------------");
for(let item of mySet.entries()){
    console.log(item);
}
console.log("----------------------------------------------------------------");
let mySet2 = new Set([1,2,3]);
mySet2.forEach((value,key)=>{
    console.log(value+':'+key);
})
console.log("----------------------------------------------------------------");

// 而且，数组的map和filter方法也可以间接用于 Set 了。
// 因此使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
console.log(union);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
console.log(intersect);
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
console.log(difference);
// Set {1}


/**
 * 2WeakSet
 */
// 首先，WeakSet 的成员只能是对象，而不能是其他类型的值。
const ws = new WeakSet();
// ws.add(1);
// 下面是 WeakSet 的另一个例子。

const foos = new WeakSet()
class Foo {
  constructor() {
    foos.add(this)
  }
  method () {
    if (!foos.has(this)) {
      throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！');
    }
  }
}
// 上面代码保证了Foo的实例方法，只能在Foo的实例上调用。这里使用 WeakSet 的好处是，
// foos对实例的引用，不会被计入内存回收机制，所以删除实例的时候，不用考虑foos，也不会出现内存泄漏。

/**
 * Map
 */
// JavaScript 的对象（Object），
// 本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。
console.log("*************************");
const m = new Map();
const o = {p: "hello world"};
m.set(o,'content');
console.log(m);
console.log(m.get(o));
console.log(m.has(o));
console.log(m.delete(o));
console.log(m.has(o));