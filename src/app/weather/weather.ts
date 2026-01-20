import { ChangeDetectorRef, Component } from '@angular/core';
import { WeatherAPI } from '../services/weather-api';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface CityCoords {
  lat: number;
  lon: number;
}

interface Cities {
  [cityName: string]: CityCoords;
}

@Component({
  selector: 'app-weather',
  imports: [FormsModule, CommonModule],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather {

  cities: Cities = {
    Helsinki: { lat: 60.169, lon: 24.946 },
    Espoo: { lat: 60.205, lon: 24.655 },
    Tampere: { lat: 61.499, lon: 23.787 },
    Vantaa: { lat: 60.294, lon: 25.041 },
    Oulu: { lat: 65.012, lon: 25.468 },
    Turku: { lat: 60.451, lon: 22.269 },
    Jyväskylä: { lat: 62.241, lon: 25.721 },
    Kuopio: { lat: 62.892, lon: 27.677 },
    Lahti: { lat: 60.983, lon: 25.662 },
    Pori: { lat: 61.483, lon: 21.783 },
    Rovaniemi: { lat: 66.503, lon: 25.728 }
  };
  
  cityKeys = Object.keys(this.cities);

  location: string = "Helsinki"

  weather: any;

  constructor(private weatherService: WeatherAPI, private cdr: ChangeDetectorRef) {
    this.getWeatherForCity(this.location);
  }

  onCityChange() {
    this.getWeatherForCity(this.location);
  }

  getWeatherForCity(cityName: string) {
    const coords = this.cities[cityName];
    this.weatherService.getWeather(coords.lat, coords.lon).subscribe(data => {
      this.weather = data;
      this.cdr.detectChanges();
    })
  }
}
