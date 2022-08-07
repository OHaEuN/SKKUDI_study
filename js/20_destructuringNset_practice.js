const SETTING = {
    name: "LUCKY LOTTO",
    count: 6,
    maxNumber: 45
}

function getRandomNumber (){
    const mySet = new Set;
    const {count, maxNumber} = SETTING;
    while(mySet.size < count){
        mySet.add(Math.floor(Math.random() * (maxNumber-1))+1);
    }
    console.log(mySet);
}

getRandomNumber();