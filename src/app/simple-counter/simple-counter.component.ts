import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-counter',
  template: `
  <div class="count">{{ countLabel }}: {{ countModel }}</div>
  <div class="actionButtons">
    <button type="button" id="decrement">{{ minusSign }}</button>
    <button type="button" id="increment">{{ plusSign }}</button>
  </div>
  `,
  styleUrls: ['./simple-counter.component.scss']
})

/* This is an exercise in minimizing stateful / impure functions, hence the minimal use of angular features.
Here, the only impure function with stateful variables is the setup where I attach event listeners to mutate the
state of the count, the rest are pure funtctions that return a value based on input, does not contain state
stateful values, nor do they cause any side effects.
*/
export class SimpleCounterComponent implements OnInit {
  countLabel: string;
  incrementAction: string;
  decrementAction: string;
  countModel: number;
  plusSign: string;
  minusSign: string;
  incrementAmount: number;
  decrementAmount: number;

  constructor() {
    this.countLabel = 'Count';
    this.incrementAction = 'increment';
    this.decrementAction = 'decrement';
    this.plusSign = '+';
    this.minusSign = '-';
    this.countModel = 0;
    this.incrementAmount = 1;
    this.decrementAmount = -1;
  }

  ngOnInit() {
    this.setup();
  }

  setup(): void {
    const increment = document.getElementById('increment');
    const decrement = document.getElementById('decrement');
    increment.addEventListener(
      'click',
      () =>
        (this.countModel = this.updateCountModel(
          this.incrementAction,
          this.countModel
        ))
    );
    decrement.addEventListener(
      'click',
      () =>
        (this.countModel = this.updateCountModel(
          this.decrementAction,
          this.countModel
        ))
    );
  }

  // pure functions
  updateCountModel(action: string, count: number): number {
    switch (action) {
      case this.incrementAction:
        return this.increment(count);
      case this.decrementAction:
        return this.decrement(count);
      default:
        return count;
    }
  }

  increment(count: number): number {
    const incrementAmount = 1;
    return count + incrementAmount;
  }

  decrement(count: number): number {
    const decrementAmount = -1;
    return count + decrementAmount;
  }
}
