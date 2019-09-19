// 函数参数的解构赋值

function f([a, b]) {
    console.log(arguments[0]);
    return a + b;
}
let sum = f([1, 2]);
console.log(sum);


function move({ x = 0, y = 0 } = {}) {
    return [x, y];
}

move({ x: 3, y: 8 }); // [3, 8]
move({ x: 3 }); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

// 对比

function move({ x, y } = { x: 0, y: 0 }) {
    return [x, y];
}

move({ x: 3, y: 8 }); // [3, 8]
move({ x: 3 }); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]
