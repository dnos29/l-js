// is a inner function, access outer variable of outer function
// Lexical scoping
function outer(){
    let name = "sondn";
    function innerF(){
        console.log("logging from closure -",name);
    }
    innerF();
}
outer();
// 
function addMaker(x){
    return function(y){
        return x + y;
    }
}
let add5 = addMaker(5);
let add10 = addMaker(10);

console.log(add5(3));
console.log(add10(3));
console.log(addMaker(6)(3));