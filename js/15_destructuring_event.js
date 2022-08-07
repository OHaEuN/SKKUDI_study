document.querySelector("div").addEventListener("click", function(evt){
    console.log(evt);
})

//destructuring
document.querySelector("div").addEventListener("click", function({type,target}){
    console.log(type, target.tagName);
}) //"click" , "DIV" 출력