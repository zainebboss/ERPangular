import { ValueFromNotification } from "rxjs";
import { Absence } from "./Absence";
import { Vacation } from "./Vacation";

export class User{

    id!: number;
    birth!: Date;
    email!: string;
    contractStart!:Date;
    password!:string;
    username!:string;
    address!:number;
    salary!:string;
    phone!:string;
    occupation!:string;
    roles!:any;
    contractEnd!:Date;
  vacations!:Vacation;
 absenses!:Absence;

 
    constructor(){

    }
    }
    