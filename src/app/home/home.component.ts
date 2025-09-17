import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  message = signal('Welcome to the Home Page!');

  keyUpHandler(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    this.message.set(inputElement.value);
    console.log(event.key);
  }
}