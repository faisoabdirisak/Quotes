import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() emitQoute= new EventEmitter();

  quoteStr!: string;
  quoteName!: string;
  myDate!: Date;
  quoteAuthor!: string;
  theQoute!: Quote;
  
  constructor() { }

  ngOnInit(): void {
  }

}
