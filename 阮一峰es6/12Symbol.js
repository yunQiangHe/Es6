// 基本数据类型 String Number Boolean undefined Null  + 第七种 Symbol
// 引用类型 Object

// Symbol值是通过symbol函数生成的

let s = Symbol(); //注意，Symbol函数前不能使用new命令，否则会报错。
console.log(typeof s); //Symbol

let s1 = Symbol("foo");
// Symbol函数可以接受一个字符串作为参数
// 表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分
console.log(s1);
console.log(s1.toString());

const obj = {
    toString(){
        return "abc"
    }
}
// 如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值
const sym = Symbol(obj);
console.log(sym);  //Symbol(abc)

// Symbol 值不能与其他类型的值进行运算，会报错。
// 但是，Symbol 值可以显式转为字符串。
// 另外，Symbol 值也可以转为布尔值，但是不能转为数值。
let syb = Symbol("My symbol");
// console.log(`i am ${syb}`);   Cannot convert a Symbol value to a string
console.log(syb.toString()); //'Symbol(My symbol)'
console.log(String(syb)); // 'Symbol(My symbol)'
console.log(Boolean(sym));

// 2.Symbol.prototype.description
// console.log(syb.description()); //syb.description is not a function  error
console.log(syb.description); //My symbol


// 3.作为属性名的 Symbol
// 由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。
let mySymbol = Symbol();

// 第一种写法
let a1 = {};
a1[mySymbol] = 'Hello!';

// 第二种写法
// 注意，Symbol 值作为对象属性名时，不能用点运算符。
// 因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，导致a的属性名实际上是一个字符串，而不是一个 Symbol 值。

// 同理，在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中
let a2 = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
let a3 = {};
Object.defineProperty(a3, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a3[mySymbol] // "Hello!"

/**
 * 4消除魔术字符串
 */
// 魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。风格良好的代码，应该尽量消除魔术字符串，改由含义清晰的变量代替。


// 5属性名的遍历
// Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，
// 也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
// 但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名

const oo = {};
let x = Symbol('x');
let y = Symbol('y');

oo[x] = 'Hello';
oo[y] = 'World';
oo.prop = "MyProp";

for(let i in oo){
    console.log(i);
}

const objectSymbols = Object.getOwnPropertySymbols(oo);
console.log(objectSymbols);

// 另一个新的 API，Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。




/**
 * 6Symbol.for()，Symbol.keyFor()
 */

 let q1 = Symbol("q");
 let q2 = Symbol("q");
 console.log(q1 == q2);  //false
 let qq1 = Symbol.for("qq");
 let qq2 = Symbol.for("qq");
 console.log(qq1 == qq2);  //true  希望重新使用同一个 Symbol 值，Symbol.for方法可以做到这一点。
//  比如，如果你调用Symbol.for("cat")30 次，每次都会返回同一个 Symbol 值，但是调用Symbol("cat")30 次，会返回 30 个不同的 Symbol 值。

// Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key。
let keyForSymbol = Symbol.keyFor(qq1);
console.log(keyForSymbol); //qq
console.log(Symbol.keyFor(q1)); //undefined
// ，Symbol.for为 Symbol 值登记的名字，是全局环境的，可以在不同的 iframe 或 service worker 中取到同一个值。



// 实例：模块的 Singleton 模式 ????


// 除了定义自己使用的 Symbol 值以外，ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方法。

// Symbol.hasInstance

