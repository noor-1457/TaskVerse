// weather.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = 'c5b4e5e70d37044d6829c01512230420';

  constructor(private http: HttpClient) {}

  //observable = data send hona component me
  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
  }

  getWeatherByCoords(lat:number, lon:number): Observable<any> {

  return this.http.get(
    `${this.apiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`
  );

}
}
