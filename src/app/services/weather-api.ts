import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherAPI {
  private baseUrl = "https://api.open-meteo.com/v1/forecast"

  constructor(private http: HttpClient) {}

  getWeather(lat:number, lon:number): Observable<any> {
    const url = `${this.baseUrl}?latitude=${lat}&longitude=${lon}&current_weather=true&wind_speed_unit=ms`;
    return this.http.get(url);
  }
  
}
