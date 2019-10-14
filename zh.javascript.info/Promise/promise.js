// executor 执行者
let p = new Promise(function (resolve, reject) {
    console.log(resolve);
    console.log(reject);
    // setTimeout(() => resolve("done!"), 1000);
    setTimeout(() => reject("done!"), 1000);
});

// p.then((result)=>{
//     console.log(result);
// },(err)=>{
//     console.error(err);
// });
p.then(
    result => console.log(result)
).catch(
    err => console.error(err)
);