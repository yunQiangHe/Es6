// fetch('/article/promise-chaining/user.json')
//     .then(response => response.json())
//     .then(user => fetch(`https://api.github.com/users/${user.name}`))
//     .then(response => response.json())
//     .then(
//         githubUser =>
//             new Promise(function (resolve, reject) {
//                 let img = document.createElement('img');
//                 img.src = githubUser.avatar_url;
//                 img.className = 'promise-avatar-example';
//                 document.body.append(img);

//                 setTimeout(() => {
//                     img.remove();
//                     resolve(githubUser);
//                 }, 3000);
//             })
//     )
//     // triggers after 3 seconds
//     .then(githubUser => alert(`Finished showing ${githubUser.name}`));


fetch('https://api.github.com/users/yunqianghe')
    .then(response => response.json())
    .then(
        githubUser => 
            new Promise(function(resolve, reject){
                console.log(githubUser);
            })
    )