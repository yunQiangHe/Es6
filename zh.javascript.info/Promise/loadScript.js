// 1.0
// function loadScript(src){
//     let script =document.createElement('script'); 
//     script.src = src;
//     document.head.append(script);
// }

// 2.0
// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(script);
//     document.head.append(script);
// }

// 回调中回调  错误处理  回调金字塔
// 3.0
// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(null, script);
//     script.onerror = () => callback(new Error(`Script load error for ${src} `));
//     document.head.append(script);
// }

// 这被称为“基于回调”的异步编程风格。异步执行某些动作的函数，应该提供一个在函数完成时可以运行的 callback 参数。

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js", script => {
//     console.log(`Cool, the ${script.src} is loaded`);
//     console.log(_); // 在加载的脚本中声明的函数
// });

//4.0 promise改写
function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error("Script load error:" + src));
        document.head.append(script);
    });
}

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js");
promise.then(
    script => console.log(`${script.src} is load!`),
    error => console.log(`Erroe:${error.message}`)
);