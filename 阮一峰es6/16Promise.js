// Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。

// pending（进行中）、fulfilled（已成功）和rejected（已失败）

const promise = new Promise(function (resolve, reject) {
    /* 异步操作成功 */
    if (0) {
        resolve("成功")
    } else {
        reject("失败")
    }
})

console.log(promise);

promise.then(res => {
    console.log(res);
}, err => {
    console.log(err);
})

// promise.then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })

// 下面是一个用Promise对象实现的 Ajax 操作的例子。
const getJSON = function (url) {
    const promise = new Promise(function (resolve, reject) {
        const handler = function () {
            if (this.readyState !== 4) {
                return
            }
            if (this.status == 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        }
        const client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();
    })
    return promise;
}

getJSON("./post.josn").then(json => {
    console.log(json);
}).catch(err => {
    console.log(err);
}).finally((e) => {
    console.log(e);
});
// Promise.prototype.then() § ⇧
// Promise 实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的。
// 它的作用是为 Promise 实例添加状态改变时的回调函数。前面说过，then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数。

// Promise.prototype.catch方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。

// Promise.prototype.finally()


// Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例
const databasePromise = connectDatabase();

const booksPromise = databasePromise
    .then(findAllBooks);

const userPromise = databasePromise
    .then(getCurrentUser);

Promise.all([
    booksPromise,
    userPromise
])
    .then(([books, user]) => pickTopRecommendations(books, user));

// romise.race方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。
const p = Promise.race([p1, p2, p3]);

// 有时需要将现有对象转为 Promise 对象，Promise.resolve方法就起到这个作用。
// Promise.resolve()
