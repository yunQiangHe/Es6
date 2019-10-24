/**
 * 流程控制语句
 */

// if 语句
let condition = 10;
if (condition > 10) {
    //...
} else if (condition > 5) {
    //...
} else {
    //...
}

// do-while  后测试循环语句 循环体内的代码至少会被执行一次
var i = 0;
do {
    i += 2;
} while (i < 10);
console.log(i); //10

// while 语句  前测试循环语句
var j = 0;
while (j < 10) {
    j += 2;
}
console.log(j); //10

// for语句  前测试循环语句
for (let i = 0; i < 10; i++) {
    console.log(i)
}

//for-in 语句  可以用来枚举对象的属性
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key];

    }
}

// break continue语句
var num = 0;
for (let i = 0; i < 10; i++) {
    if (i % 5 == 0) {
        break;  //会立即退出循环，强制继续执行循环后面的语句
        // continue; //会立即退出循环，但退出循环后会从循环的顶部继续执行
    }
    num++
}
console.log(num); //4  -- break 
//8  -- continue 


// break continue + lable
var times = 0;
outermost:
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i == 5 && j == 5) {
            // break outermost;
            continue outermost;
        }
        num++
    }
}
console.log(num); //55 -- break //55 -- continue 

switch (num) {
    case value:
        statement
        break;
    case value: 
        statement
        break;
    default:
        statement
}