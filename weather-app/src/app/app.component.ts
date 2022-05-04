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
      next: (allWeatherData) => {
        for (let i: number = 0; i < allWeatherData.cnt; i++) {
          let cityData: WeatherData = {
            city: allWeatherData.list[i].name,
            country: allWeatherData.list[i].sys.country,
            temp: Math.round(allWeatherData.list[i].main.temp),
            icon: allWeatherData.list[i].weather[0].icon,
            id: allWeatherData.list[i].id,
          };
          this.cityDataArray.push(cityData);
        }
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  getSearchedCityData(city: string) {
    this.appservice.getCityData(city).subscribe({
      next: (weatherData) => {
        let cityData: WeatherData = {
          city: weatherData.name,
          country: weatherData.sys.country,
          temp: Math.round(weatherData.main.temp),
          icon: weatherData.weather[0].icon,
          id: weatherData.id,
        };
        this.cityDataArray = [cityData];
      },
    });
  }
}
