export class Information{
    name: string;
    relation: string;
    dob: string;
    icon: string;
    mesage: string;
    contact: number;

    constructor(name:string, rel:string, dob:string, icon:string, message:string, contact: number){
        this.name = name;
        this.relation = rel;
        this.dob = dob;
        this.icon = icon;
        this.mesage = message;
        this.contact = contact;
    }
}