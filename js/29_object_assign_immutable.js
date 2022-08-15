//Object assign 메서드

const previousObj = {
    name: "crong",
    lastTime: "11:20"
}

const myHealth = Object.assign({}, previousObj, {
    "name": "honux",
    "age" : 99
});

console.log(previousObj, myHealth);

//[object Object] {
//     lastTime: "11:20",
//     name: "crong"
// }
// [object Object] {
//     age: 99,
//     lastTime: "11:20",
//     name: "honux"
// }
