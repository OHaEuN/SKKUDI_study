function getObj (){
    const name ="crong";

    const getName = function (){
        return name;
    }

    const setName = function (newName) {
        name = newName;
    }

    const printName = function (){
        console.log(name);
    }

    return {getName, setName, name} 
    // 오브젝트 리터럴 형태를 반환할 때 불필요한 키값 생략, value 리턴
    // {
    //     getName : getName,
    //     setName : setName
    // }
}

var obj = getObj();

console.log(getObj.getName());



// 간단하게 오브젝트 생성

const data ={
    name2,
    getName2(){

    },
    age
}