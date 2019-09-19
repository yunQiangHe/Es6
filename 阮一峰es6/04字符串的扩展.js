// 1. 字符的Unicode表示法

// codePointAt()

// 几个方法
let s = "Hello world!";
console.log(s.includes("He"));
console.log(s.startsWith("He"));
console.log(s.endsWith("!"));
// 这3个方法都支持第二个参数 表示开始搜索的位置
console.log(s.includes("world", 3));
console.log(s.startsWith("He",3));
console.log(s.endsWith("!",3));

// repeat() 方法
let news = s.repeat(2);
console.log(news);

// padStart()
// padEnd()

// ***   模板字符串
let str = `My name is ${ name }`;

