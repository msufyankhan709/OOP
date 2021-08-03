import { Humans } from "./Human";

export class Student extends Humans{
    studentId:number;

    constructor(firstName:string,lastName:string,studentId:number){
        super(firstName,lastName);
        this.studentId=studentId;
    }

    getstudentdetails(){
        return  this.gethumanName() +" "+ this.studentId;
    }
}