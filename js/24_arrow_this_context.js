//this context of Arrow function

const myObj ={
    // runTimeout(){
    //     setTimeout(function(){
    //         console.log(this === window); //true
    //         this.printData();
    //     }.bind(this), 200);
    // },

    runTimeout(){
        setTimeout(() => {
            console.log(this === window); //false
            this.printData();
        }, 200);
    },

    printData(){
        console.log("hi codesquad!");
    }
}

myObj.runTimeout();

