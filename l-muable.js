// muable/immuable
// If an item is mutable, modifying the copy also modifies the original. 
// If it’s immutable, modifying the copy does not affect the original.
// https://developer.mozilla.org/en-US/docs/Glossary/Mutable
// A mutable object is an object whose state can be modified after it is created.
// Immutables are the objects whose state cannot be changed once the object is created.
let person1 = {
    name: "sondn",
    age: 27,
}
let person2 = person1;
let person3 = {...person1};
person2.name = "dnos";
console.log("person1", person1); // be careful with this. User persion2 = {...persion1}
console.log("person3", person3);
// same with array
let arr1 = [1,2,3,4,5];
let arr2 = arr1;
let arr3 = [...arr1];
arr2[0] = 12;
console.log("arr1: ", arr1);
console.log("arr2: ", arr2);
console.log("arr3: ", arr3);