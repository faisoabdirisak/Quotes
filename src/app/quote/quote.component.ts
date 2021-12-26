import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[
    new Quote("Faiso","world poem","Baba Told us", new Date(2021,12,25)),
    new Quote("FAiso","literature","loves Forever", new Date(2021,12, 25))
  ];

  upNum!: number;
  dowNum!: number;
  counter!: number;

  upvote(i: any){
    this.quotes[i].upvotes+=1
}
downvote(i:any){
  this.quotes[i].downvotes+=1
}
delQoute(i: number){
  this.quotes.splice(i, 1)
}

addQuote(emittedQuote: Quote){
  this.quotes.push(emittedQuote)
}

highestUpvote(){
  this.upNum = 0
  this.dowNum = 0

  for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
    this.dowNum = this.quotes[this.counter].upvotes;
    if(this.dowNum > this.upNum){this.upNum = this.dowNum}
  }
  return  this.upNum
}

  constructor() { }

  ngOnInit(): void {
  }

}
