//Array -> set
//object -> map

//map은 key/value

let wm = new WeakMap();
let myfun = function(){};
//이 함수가 얼마나 실행되었는지를 알려고 할 때

wm.set(myfun,0);

console.log(wm); // function => 0

let count=0;
for (let i=0;i<10;i++){
    count=wm.get(myfun);
    count++;
    wm.set(myfun,count);
}

console.log(wm.get(myfun)); // function => 10

myfun = null;
console.log(wm.get(myfun)); // undefined
console.log(wm.has(myfun)); // false

