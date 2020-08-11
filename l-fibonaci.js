// return n-th fibonanci number
function nthFibo(n){
    let fn1 = fn2 = 1;
    for(let i = 3; i <= n; i++){
        let fn = fn1 + fn2;
        fn1 = fn2;
        fn2 = fn;
    }
    return fn2;
}
console.log(nthFibo(5));
// return array fibo greater or less than n
function arrFibo(n){
    let fn1 = fn2 = 1;
    if(n < 0 || !Number.isFinite(n)) return [];
    if(n <= 2) return new Array(n).fill(1);
    let arr = [fn1, fn2]
    for(i = 3; i <= n; i++){
        let fn = fn1 + fn2;
        fn1 = fn2;
        fn2 = fn
        arr.push(fn);
    }
    return arr;
}
console.log(arrFibo(0));
console.log(arrFibo(2));
console.log(arrFibo(10));