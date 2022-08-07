let mySet = new Set();
console.log(toString.call(mySet));

//Set : 중복없이 유일한 값을 저장하려고 할 때, 이미 존재하는지 체크할 때 유용

mySet.add("crong");
mySet.add("hary");
mySet.add("crong");

console.log(mySet.has("crong")); //has - true

mySet.forEach(function(v){
    console.log(v);
}) // "crong","hary" = 중복된 값 표시 x

mySet.delete("crong"); //delete 가능