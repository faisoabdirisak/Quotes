export class Quote {
    public upvotes:number;
    public downvotes:number;
    constructor(public name:string, public author:string, public qoute:string, public myDate:Date){
        this.upvotes=0;
        this.downvotes=0;
    }
}
