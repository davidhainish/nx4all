import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map, Observable } from 'rxjs';

@Injectable()
export class WeatherService {
  private url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk';

  constructor(
    private configService: ConfigService,
    private httpService: HttpService
  ) { }

  getWeather(): Observable<WeatherData> {
    const appId = this.configService.get<string>('openweatherAppId');
    const data$ = this.httpService.get(`${this.url}&APPID=${appId}`)
      .pipe(
        map((axiosResponse: AxiosResponse) => (axiosResponse.data as WeatherData))
      );

    return data$;
  }
}

export interface WeatherData {
  coord: {
    lon: number,
    lat: number
  },
  weather: any[],
  base: string,
  main: {
    temp: number,
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number
  },
  clouds: {
    all: number
  },
  dt: number,
  sys: {
    type: number,
    country: string,
    sunrise: number,
    sunset: number,
  },
  timezone: number,
  id: number,
  name: string,
  cod: number
}
