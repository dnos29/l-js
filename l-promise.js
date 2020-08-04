async function returnAPromise(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("returnAPromise")
        }, 3000)
    });
}

async function asyncCall(){
    console.log("start async call");
    let rs = await returnAPromise();
    console.log(rs);
}

// asyncCall();
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Loi cmnr")
        resolve(123)
    }, 2000)
})
function returnPromise(){
    return promise;
}
promise.then(
    rs => console.log(rs),
    // err => console.log(err),
)
.catch(err => console.log(err))
// .finally(console.log("Finally")) // this will fire before get error
.finally(() => console.log("Finally"))


// async function callPromise(){
//     console.log("before call promise");
//     let rs = await promise;
//     console.log(rs);
//     console.log("after call promise");
// }
// callPromise();