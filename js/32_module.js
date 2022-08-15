export function log(data){
    console.log(data);
} //객체 형태로 export

export const getCurrentHour =  () => {
    return (new Date).getHours();
}


/* Class */

export class MyLogger {
    consturctor(props){
        this.lectures = ['java','iOS'];
    }
    
    getLectures() {
        return this.lectures;
    }

    getTime() {
        return Date.now();
    }
}



// <app.js 코드>
//import log, { getCurrentHour, MyLogger } from './module';
//const logger = new MyLogger();
//log(logger.getLectures());
