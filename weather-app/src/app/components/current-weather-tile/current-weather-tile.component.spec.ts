import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherTileComponent } from './current-weather-tile.component';

describe('CurrentWeatherTileComponent', () => {
  let component: CurrentWeatherTileComponent;
  let fixture: ComponentFixture<CurrentWeatherTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentWeatherTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
