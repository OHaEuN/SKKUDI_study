
//const - 배열, 오브젝트는 변경 가능

function home() {
  const list = ["apple", "orange", "watermelon"];
  list.push("banana"); // ["apple", "orange", "watermelon","banana"]
}

const list = ["apple", "orange", "watermelon"];
const list2 = [].concat(list);
console.log(list2 === list); //false
