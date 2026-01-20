import { TestBed } from '@angular/core/testing';

import { WeatherAPI } from './weather-api';

describe('WeatherAPI', () => {
  let service: WeatherAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
