// 1.对象的解构赋值

// 对象解构和数组有一个重要的不同
// 数组的元素是按次序排列的 变量的取值由它的位置决定
// 对象的属性是没有顺序的 变量必须与属性同名 才能取得正确的值
let { foo, bar, test } = { foo: "aa", bar: "bb" };
console.log(foo); 
console.log(bar);
console.log(test); //undefiend