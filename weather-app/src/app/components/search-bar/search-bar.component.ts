import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  city!: string;

  constructor() {}

  ngOnInit(): void {}

  onSearchCity(cityName: string) {
    this.city = cityName;
    this.onSearch.emit(this.city);
  }
}
