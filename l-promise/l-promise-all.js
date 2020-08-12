let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name: 'sondn', age: ''})
    },5000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2")
    },6000);
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3")
    },1000);
})
Promise.all([p1, p3, p2]).then(
    values => console.log(values),
).catch(err => console.log(err))