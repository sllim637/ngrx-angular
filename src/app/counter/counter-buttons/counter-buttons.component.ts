import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {
  @Output() increment_em = new EventEmitter<void>()
  @Output() decrement_em = new EventEmitter<void>()
  @Output() reset_em = new EventEmitter<void>()

  constructor(private store: Store<{ counter: { counter: number } }>) { }
  ngOnInit(): void {

  }

  on_increment() {
    this.store.dispatch(increment()) 
  }
  on_decrement() {
    this.store.dispatch(decrement())
  }
  on_reset() {
    this.store.dispatch(reset())  }

}
