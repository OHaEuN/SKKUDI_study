//weakset
//참조를 가지고 있는 객체만 저장이 가능하다
//객체형태를 중복없이 저장하려고 할때 유용하다 

let arr = [1,2,3,4];
let arr2 = [5,6,7,8];
let obj ={arr, arr2};
let ws = new WeakSet();

ws.add(arr);
// ws.add(111);//error
// ws.add("111");//error
// ws.add(function(){}); // 가능
ws.add(arr2);
ws.add(obj);

arr = null;

console.log(ws); //WeakSet {[1,2,3,4], [5,6,7,8], Object{arr: Array(4), arr2: Array(4)}}
console.log(ws.has(arr),ws.has(arr2)); // false true

