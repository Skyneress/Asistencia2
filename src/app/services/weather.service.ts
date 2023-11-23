import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

/*   getWeather() {
    const apiKey = environment.openWeatherMapApiKey;
    // Modifica la llamada para obtener el clima de Santiago, Chile
    const url = `${this.apiUrl}?q=Santiago,CL&appid=${apiKey}`;
    return this.http.get(url);
  } */
}
