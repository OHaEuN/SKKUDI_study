let obj = {
    name: "crong",
    address: "seoul",
    age: 20
}

let {name, age} = obj; // 키값을 이용하여 destructuring
console.log(name, age); //"crong", 20 출력

let {name: myName, age: myAge} = obj; // 다른 key로 destructuring 가능
console.log(myName, myAge); 