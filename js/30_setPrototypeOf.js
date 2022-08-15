//setPrototypeOf

const healthObj = {
    showHealth : function (){
        console.log("오늘 운동시간 : " + this.healthTime);
    },
    setHealth : function(newTime){
        this.healthTime = newTime;
    }
}

const newobj = Object.setPrototypeOf({
    name: "crong",
    lastTime: "11:20"
}, healthObj);
//newobj의 prototype으로 healthObj를 지정
console.log(newobj);
