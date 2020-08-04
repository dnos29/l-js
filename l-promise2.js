let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise was implement")
    }, 2000)
})
promise.then((rs) => {
    console.log(rs);
    return rs + " 1";
})
.then(rs => {
    console.log(rs);
    return rs + " 2";
})
.then(rs => {
    console.log(rs);
    return rs + " 3";
})
.then(rs => {
    console.log(rs);
    return rs + " 4";
})