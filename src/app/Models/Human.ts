export class Humans{
    firstName:string;
    lastName:string;

    constructor(firstName:string,lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    gethumanName(){
        return this.firstName +" "+  this.lastName;
    }
}