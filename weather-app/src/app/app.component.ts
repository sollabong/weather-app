import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'GREENFOX Weather App';
  cities: string[] = ['Seattle', 'Miami', 'Barcelona', 'London', 'Budapest'];

  constructor() {}
}
