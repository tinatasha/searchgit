export class Repository {
    public showDescription:boolean
    constructor(public description:string, public name:string,public forks:number,public watches:number,public language:string,public url:string,public stars:number){
        this.showDescription=true;
    }
}
