
function addMark() {
  let newArray = Array.from(arguments); //배열로 변환
  let newData = newArray.map(function(value){ 
    value + "!"
  });

  console.log(newData);
}

addMark(1, 2, 3, 4, 5, 7, 8, 9);
