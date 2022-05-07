import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CurrentWeatherTileComponent } from './components/current-weather-tile/current-weather-tile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ForecastCardComponent } from './components/forecast-card/forecast-card.component';

@NgModule({
  declarations: [AppComponent, SearchBarComponent, CurrentWeatherTileComponent, DashboardComponent, ForecastComponent, NotFoundPageComponent, ForecastCardComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
