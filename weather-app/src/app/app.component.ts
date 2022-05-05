import { Component } from '@angular/core';
import { WeatherData } from './interfaces-classes/classes';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'GREENFOX Weather App';
  cities: number[] = [5809844, 4164138, 3128760, 2643743, 3054643];
  cityIds: string = this.cities.join(',');
  cityDataArray: WeatherData[] = [];

  constructor(private appservice: AppService) {}

  ngOnInit() {
    this.appservice.getDefaultCitiesData(this.cityIds).subscribe({
      next: (allCityData) => {
        this.cityDataArray = allCityData;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  getSearchedCityData(city: string) {
    this.appservice.getCityData(city).subscribe({
      next: (cityData) => {
        this.cityDataArray = [cityData];
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
