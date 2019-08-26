/**
 * es5
 * JavaScript 语言中，生成实例对象的传统方法是通过构造函数
 */

function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
console.log('p', p);

/**
 * es6 class 类
 */

class Point2 {
    // 构造方法
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `(${this.x} , ${this.y})`
    }
}

let p2 = new Point2(11, 22);
console.log('p2', p2);
// ES6 的类，完全可以看作构造函数的另一种写法。
// 上面代码表明，类的数据类型就是函数，类本身就指向构造函数.
console.log(typeof Point2); //function
console.log(Point2 === Point2.prototype.constructor); //true

// 事实上，类的所有方法都定义在类的prototype属性上面。
class Test {
    constructor(){}
    toString(){}
    toValue(){}
}

Test.prototype = {
    constructor(){},
    toString(){},
    toValue(){}
}

// 类的内部所有定义的方法，都是不可枚举的（non-enumerable)
// 上面代码采用 ES5 的写法，toString方法就是可枚举的。
console.log(Object.keys(Test.prototype)) //[]
console.log(Object.getOwnPropertyNames(Test.prototype)) //[ 'constructor', 'toString', 'toValue' ]

/**
 * constructor 构造函数
 * constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
 */