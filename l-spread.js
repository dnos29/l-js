// spread, rest for array, object
// rest operator if in function
function f(...arr){
    return arr.reduce((acc, item) => acc + item);
}
console.log(f(1,2,3,4));

//  Object.assign() triggers setters. spread operator don't

// rest
function sum(x,y,z){
    return z + y + z;
}
let arr = [1,2,3,4];
console.log(sum(...arr));