class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    toStrinng() {
        return `(${this._x},${this._y})`
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this._color = color;
    }
    toStrinng(){
        return this.color + super.toStrinng();
    }
}

let p = new Point(1, 2);
let p2 = new ColorPoint(3, 33, "红色");
console.log(p);
console.log(p.toStrinng());
console.log(p2);

// ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。
// ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。


// Object.getPrototypeOf方法可以用来从子类上获取父类。