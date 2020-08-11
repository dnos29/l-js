function person(name, age){
    const obj = {};
    obj.name = name;
    obj.age = age;
    obj.greeting = function(){
        console.log(`Hello. I'm ${obj.name}. I'm ${obj.age} year old.`);
    }
    return obj;
}

let p = person('Dnos', 26);
p.greeting();