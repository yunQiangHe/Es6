// var let const
var a = 99;

f();

console.log(a);

function f() {
    console.log(a);
    var a = 10; // a变量存在变量声明提升 默认值undefined
    console.log(a);
}
//输出结果依次 undefined 10 99

for (var i = 0; i < 5; i++) {
    setTimeout(function(){
        console.log(i); //5 个5
    },0)
}

for (let i = 0; i < 5; i++) {
    setTimeout(function(){
        // i是循环体内部局部作用域 不收外界影响
        console.log(i); //0 1 2 3 4
    },0)
}
// 块级作用域  暂时性死区  不能重复声明 先声明后使用
// const 声明的变量是简单的类型之不能修改 如果是复杂类型的变量指向内存地址的指针不能修改