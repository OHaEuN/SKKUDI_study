
var list = document.querySelectorAll("li");

//let - var을 사용했을 때의 오류 해결
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    console.log(i + "번째 리스트 입니다.");
  });
}
