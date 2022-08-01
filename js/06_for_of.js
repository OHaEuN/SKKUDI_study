
var data = [1, 2, undefined, NaN, null, ""];
Array.prototype.getIndex = function () {};

//for ~ in: object 순회
for (let idx in data) {
  console.log(idx);
}// 에러 발생 - function(){} 까지 출력

//for ~ of: 배열, 문자열 순회
for (let value of data) {
  console.log(value);
}

var str = "hello world!!!";
for(let value of str){
  console.log(value);
}// 문자 단위 출력
