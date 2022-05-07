import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  cityData!: any;
  forecastList: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private appservice: AppService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.appservice.getForecastData(params['id']).subscribe({
        next: (forecastData) => {
          this.cityData = {
            city: forecastData.city,
            country: forecastData.country,
          };
          this.forecastList = forecastData.list;
        },
        error: (err) => {
          this.router.navigate(['**']);
        },
      });
    });
  }
}
