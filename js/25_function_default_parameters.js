//default parameters

function sum(value,size ={value:1}){
    return value*size;
}

console.log(sum(3,{value:3}));