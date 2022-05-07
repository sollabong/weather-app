import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WeatherData } from '../interfaces-classes/interfaces';
import { map } from 'rxjs/operators';
import { getCode, getName } from 'country-list';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getCityData(cityName: string): Observable<WeatherData> {
    return this.http
      .get<any>(
        `${environment.url}weather?q=${cityName}&appid=${environment.APIKey}&units=metric`
      )
      .pipe(
        map((weatherData) => {
          let cityData: WeatherData;
          return (cityData = {
            city: weatherData.name,
            country: getName(weatherData.sys.country),
            temp: Math.round(weatherData.main.temp),
            icon: weatherData.weather[0].icon,
            id: weatherData.id,
          });
        })
      );
  }

  getDefaultCitiesData(cities: string): Observable<WeatherData[]> {
    return this.http
      .get<any>(
        `${environment.url}group?id=${cities}&appid=${environment.APIKey}&units=metric`
      )
      .pipe(
        map((allWeatherData) => {
          let cityDataArray: WeatherData[] = [];
          allWeatherData.list.forEach((weatherData: any) => {
            let cityData: WeatherData;
            cityData = {
              city: weatherData.name,
              country: getName(weatherData.sys.country),
              temp: Math.round(weatherData.main.temp),
              icon: weatherData.weather[0].icon,
              id: weatherData.id,
            };
            cityDataArray.push(cityData);
          });
          return cityDataArray;
        })
      );
  }

  getForecastData(cityId: string): Observable<any> {
    return this.http
      .get<any>(
        `${environment.url}forecast/daily?id=${cityId}&appid=${environment.APIKey}&units=metric&cnt=5`
      )
      .pipe(
        map((forecast) => {
          return {
            city: forecast.city.name,
            country: getName(forecast.city.country),
            list: forecast.list.map((data: any) => {
              return {
                dt: data.dt,
                icon: data.weather[0].icon,
                temp: data.temp.day,
                description: data.weather[0].description,
              };
            }),
          };
        })
      );
  }
}
