function fa(){
    console.log("without params");
}

function fa(str){
    console.log("Params: ", str)
}

fa(); // no hieu ham nao duoc khai bao sau
const a = "Im A";
function one(){
    const a = 1;
    console.log(a);
}
function two(){
    var a = 2;
    console.log(a);
}
console.log(a);
two();
one();