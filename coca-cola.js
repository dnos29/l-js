
function promote(n){
    var temp = n;
    let bonus = 0;
    while(temp >= 3){
        temp = temp -2;
        bonus++;
    }
    return n + bonus;
}
console.log(promote(3))
console.log(promote(5))
console.log(promote(10))