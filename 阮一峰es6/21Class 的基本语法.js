// Class 的基本语法

// es5 改造函数 加 原型
// function Point(x, y){
//     this.x = x;
//     this.y = y;
// }
// Point.prototype.toString = function(){
//     return '('+this.x+','+this.y+')';
// } 
// let p = new Point(1,9);
// console.log(p);

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ',' + this.y + ')';
    }
    toValue() {
        console.log("我是类的方法");
    }
}
let p = new Point(1, 9);
console.log(p);

// 类上面所有的方法都定义在类的prototype属性上面.
// 等价于
Point.prototype = {
    constructor() { },
    toString() { },
    toValue() { }
}

// 由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。Object.assign方法可以很方便地一次向类添加多个方法。
Object.assign(Point.prototype, {
    toString() { },
    toValue() { }
})

// 另外，类的内部所有定义的方法，都是不可枚举的（non-enumerable）


// 取值函数getter  和  存值函数 setter
// 在类中可以使用get set关键字 对某个属性设置存值函数和取值函数 拦截该属性的存取行为
class Myclass {
    constructor() { }
    get prop() {
        return 'getter'
    }
    set prop(value) {
        console.log(`setter:${value}`);
    }

    // 快捷键 set get

    // get property () {
    // }
    // set property (value) {

    // }
}
let inst = new Myclass();
inst.prop = 123;  //setter:123
console.log(inst.prop);;  //getter


class CustomHTMLElement {
    constructor(element) {
        this.element = element;
    }
    get html() {
        return this.element.innerHTML;
    }
    set html(value) {
        this.element.innerHTML = value;
    }
}
// Object.getOwnPropertyDescriptor() 方法返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）
var descriptor = Object.getOwnPropertyDescriptor(
    CustomHTMLElement.prototype, 'html'
);
console.log(descriptor);
console.log("get" in descriptor);
console.log("set" in descriptor);

let methodsName = 'getArea';
class Calc {
    constructor() { }
    [methodsName]() {
        console.log("类的属性名，可以采用表达式");
    }
}
console.log(new Calc());

// Class表达式
// 和函数一样 类可以使用函数表单式形式定义
const Myclassvar = class Me {
    getClassName() {
        return Me.name
    }
}
let inst1 = new Myclassvar();
console.log(inst1.getClassName());
// console.log(Me.name);  error 
// 使用表达式的话 Me 只能再类的内部使用  在 Class 外部，这个类只能用MyClass引用。

// 1 类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。
// 2 类不存在变量提升（hoist），这一点与 ES5 完全不同。
// ？？？？？Generator方法
// 4. this的指向    类的方法内部如果含有this默认指向类的实例

/**
 * 静态方法
 * 如果在一个方法前加上 static关键字 表示该方法不会被实例继承 而是直接通过类来调用
 */
// 类相当于实例的原型 所有在类中定义的方法 都会被实例继承
class Foo {
    static classMethod() {
        return 'hello'
    }
}
let a = Foo.classMethod();
console.log(a);
let b = new Foo();
// console.log(b.classMethod());  // b.classMethod is not a function

// 注意，如果静态方法包含this关键字，这个this指的是类，而不是实例。
class Fo{
    static bar(){
        this.baz(); //this指向Foo类
    }
    static baz(){
        console.log("hello");
    }
    baz(){
        console.log("world");
    }
}

class Foson extends Fo{
}

Fo.bar(); //hello
Foson.baz(); //hello  父类的静态方法 可以被子类继承

// 实例属性的新写法
// 实例属性除了定义在constructor方法里面的this上面  也可以定义在类的最顶层
class IncreasingCounter{

    // _count = 0;  //和函数vlaue() increament()同一级
   
    static myStaticProp = "因为 ES6 明确规定，Class 内部只有静态方法，没有静态属性。现在有一个提案提供了类的静态属性，写法是在实例属性的前面，加上static关键字。";

    constructor(){
        this._count = 0;
        console.log(IncreasingCounter.myStaticProp);
    }

    get value () {
        console.log("Getting the current vlaue");
        return this._count;
    }
    increment(){
        this._count++
    }
}

let instCount = new IncreasingCounter();
instCount.increment();
console.log(instCount.value);
// 静态属性  === class；类本身的属性 class.propName  而不是定义在实例对象this上
IncreasingCounter.prop = "我给类IncreasingCounter添加一个静态属性prop";
console.log(IncreasingCounter.prop);


// ？？？？
// 私有的方法 私有的属性  
// 私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。这是常见需求，有利于代码的封装，但 ES6 不提供，只能通过变通方法模拟实现。



// new.target 属性

// new是从构造函数生成实例对象的命令。ES6 为new命令引入了一个new.target属性，该属性一般用在构造函数之中，返回new命令作用于的那个构造函数。
// 如果构造函数不是通过new命令或Reflect.construct()调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的。



