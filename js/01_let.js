//var: 함수 스코프 <-> let, const: 블록 스코프

var name = "global var";

function home() {
  var home = "homevar";
  for (var i = 0; i < 100; i++) {}
  console.log(i);

  if (true) {
    let myif = "myif";
  }
  console.log(myif); //에러발생 - 블록을 벗어났기 때문
}

home();
