import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent {
  constructor(private _router: Router) { }

  isActive(url: string): boolean {
    return url == this._router.url;
  }
}