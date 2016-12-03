import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
             <h1>{{title}}</h1>
             <app-main-navigation></app-main-navigation>
             <router-outlet></router-outlet>
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basketball Stats';
}
