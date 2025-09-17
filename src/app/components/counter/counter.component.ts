import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count = signal(0);
  increment() {
    this.count.update(n => n + 1);
  }
  decrement() {
    this.count.update(n => n - 1);
  }
  reset() {
    this.count.set(0);
  }
} 