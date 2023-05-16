
export class Skill {
    id_skill:any;
    name_skill:string;
    level:number;

    constructor(name_skill:string, level:number){
        this.name_skill = name_skill;
        this.level = level;
    }
}