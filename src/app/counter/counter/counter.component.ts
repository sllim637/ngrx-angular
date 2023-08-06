import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter_val: number
  constructor() {
    this.counter_val = 5
   }

  ngOnInit() {

  }
}
