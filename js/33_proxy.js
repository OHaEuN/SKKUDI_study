//proxy

const myObj = {name: 'crong', changedValue : 0};
const proxy = new proxy(myObj, {
    get: function (target, property, receiver){
        console.log('get value');
        return target[property];
    },
    set: function(target, property,value){
        console.log('set value');
        target['changedValue']++;
        target[property] = value;
    }
});

//proxy.name = "codesquad"; 실행했을 때 자동으로 set 함수 실행되어 set value 찍힘
//proxy.changedValue; 실행했을 때 get 함수 실행되어 get value 찍힘
