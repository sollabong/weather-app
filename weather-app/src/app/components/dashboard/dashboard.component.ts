import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/interfaces-classes/interfaces';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
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
