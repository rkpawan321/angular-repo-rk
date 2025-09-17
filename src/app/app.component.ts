import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>
    <main>
eeee
    </main>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      main {
        padding: 1rem;
      }
    `
  ],
})
export class AppComponent {
  title = 'second-ng-app';
}
