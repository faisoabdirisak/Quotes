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
  constructor() { }

  ngOnInit(): void {
  }

}
