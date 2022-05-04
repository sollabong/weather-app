export class IWeatherData {
  city: string;
  country: string;
  temp: number;
  icon: string;
  id: number;

  constructor(
    city: string,
    country: string,
    temp: number,
    icon: string,
    id: number
  ) {
    this.city = city;
    this.country = country;
    this.temp = Math.round(temp - 273);
    this.icon = icon;
    this.id = id;
  }
}
