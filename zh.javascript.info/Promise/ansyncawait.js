// async function

// async 在函数前面 这个函数返回一个Promise
// await 
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done!");
        }, 1000)
    })

    let result = await promise;
    console.log(result);
}

f();


// fetch('/article/promise-chaining/user.json')
//     .then(response => response.json())
//     .then(user => fetch(`https://api.github.com/users/${user.name}`))
//     .then(response => response.json())
//     .then(githubUser => new Promise(function (resolve, reject) {
//         let img = document.createElement('img');
//         img.src = githubUser.avatar_url;
//         img.className = "promise-avatar-example";
//         document.body.append(img);

//         setTimeout(() => {
//             img.remove();
//             resolve(githubUser);
//         }, 3000);
//     }))
//     .then(githubUser => alert(`Finished showing ${githubUser.name}`));