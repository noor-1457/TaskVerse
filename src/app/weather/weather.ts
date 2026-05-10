import { Component, inject } from '@angular/core';
import { WeatherService } from './weather.service';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather {
  weatherData: any | number = null;
  city: string = '';
  currentDate: string = '';

  ngOnInit() {
    this.getCurrentLocation();
    this.currentDate = new Date().toDateString();
  }
  constructor(
    private weather: WeatherService,
    private cd: ChangeDetectorRef,
  ) {}

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      this.weather.getWeatherByCoords(lat, lon).subscribe({
        next: (data) => {
          console.log(data);
          this.weatherData = data;
          this.cd.detectChanges();
        },

        error: (error) => {
          console.log(error);
        },
      });
    });
  }

// Angular ko pata nahi chalta UI update karni hai

// Is situation me ChangeDetectorRef use hota hai.


  // subscribe = data recieve hona
  getData() {
    this.weatherData = null;
    console.log(this.city);
    this.weather.getWeather(this.city).subscribe({
      //weather get kiya
      next: (data: any) => {
        //weather data ko data name dedo or type any kero
        console.log(data); //data print
        this.weatherData = { ...data }; //weather = data
        this.cd.detectChanges();
      },
      error: (error) => {
        //erroe handling
        console.error('Error fetching weather:', error);
        this.cd.detectChanges();
      },
    });
  }
}
