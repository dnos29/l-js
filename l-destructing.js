let a = [1,2,3,5,6,7,8];
[x,y, ...rest] = a;
console.log("a: ", a);
console.log("x: ", x);
console.log("y: ", y);
console.log("rest: ", rest);
let obj = {name: "dnos", age: 27, job: "developer", sex: "male"};
let {sex, age, ...restObj} = obj; // Rest element must be last element
console.log("sex: ", sex, ",restObj: ", restObj, ",age: ", age);
// For of iteration and destructuring
const people = [
    {
      name: 'Mike Smith',
      family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith'
      },
      age: 35
    },
    {
      name: 'Tom Jones',
      family: {
        mother: 'Norah Jones',
        father: 'Richard Jones',
        brother: 'Howard Jones'
      },
      age: 25
    }
  ];
  for(const {name, family: {father: f}} of people){
      console.log(f, " is father of ", name)
  }
