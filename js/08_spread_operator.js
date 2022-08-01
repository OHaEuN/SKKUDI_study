let pre = [100, 200, "hello", null];
let newData = [0,1,2,3, ...pre, 4];
console.log(newData);

function sum(a, b, c){
    return a + b + c;
}
pre = [100, 200, 300];

console.log(sum.apply(null, pre));
console.log(sum(...pre));
