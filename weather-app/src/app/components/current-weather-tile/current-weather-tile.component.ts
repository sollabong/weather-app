import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/interfaces-classes/classes';

@Component({
  selector: 'app-current-weather-tile',
  templateUrl: './current-weather-tile.component.html',
  styleUrls: ['./current-weather-tile.component.scss'],
})
export class CurrentWeatherTileComponent implements OnInit {
  @Input() cityData!: WeatherData;
  constructor() {}

  ngOnInit(): void {}
}
