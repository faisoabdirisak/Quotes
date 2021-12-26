import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() emitQuote= new EventEmitter();

  quoteStr!: string;
  quoteName!: string;
  myDate!: Date;
  quoteAuthor!: string;
  theQuote!: Quote;
  
  

  submitQuote(){
    this.theQuote= new Quote(this.quoteName,this.quoteAuthor,this.quoteStr,this.myDate);
    this.quoteStr='';
    this.quoteAuthor='';
    this.quoteName='';
    this.emitQuote.emit(this.theQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
