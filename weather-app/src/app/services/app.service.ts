import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WeatherData } from '../interfaces-classes/classes';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getCityData(cityName: string): Observable<any> {
    return this.http.get<any>(
      `${environment.url}weather?q=${cityName}&appid=${environment.APIKey}&units=metric`
    );
  }

  getDefaultCitiesData(cities: string) {
    return this.http.get<any>(
      `${environment.url}group?id=${cities}&appid=${environment.APIKey}&units=metric`
    );
  }
}
