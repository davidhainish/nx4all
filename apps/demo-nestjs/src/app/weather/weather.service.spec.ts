import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { HttpModule, HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { WeatherData, WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpService: HttpService;

  const httpServiceMock = {
    get: jest.fn(() => of())
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      // imports: [HttpModule],
      providers: [
        WeatherService,
        { provide: HttpService, useValue: httpServiceMock },
      ],
    }).compile();

    service = module.get<WeatherService>(WeatherService);
    httpService = module.get<HttpService>(HttpService);
  });

  // describe('getWeather', () => {
  //   it('should return some weather date', async () => {
  //     const result = of>({ data: getWeatherMock });
  //     jest.spyOn(httpService, 'get').mockImplementation(() => result);

  //     expect(await service.getWeather()).toBe(result);
  //   });
  // });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe("when API call is successful", () => {
    it("should return weather data", async () => {
      // Arrange
      const result: AxiosResponse = {
        data: getWeatherMock,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {
          url: ''
        }
      };
      jest.spyOn(httpService, 'get').mockReturnValueOnce(of(result));

      // Act
      const data = await service.getWeather();

      // Assert
      expect(result.data).toEqual(data);
    });
  });

  describe("when API call fails", () => {
    it("should return empty data", async () => {
      // Arrange

      // Act

        // Assert

      });
    });

  // it('should do get request and return weather', (done) => {
  //   jest.spyOn(httpService, 'get').mockReturnValue(
  //     of({ data: getWeatherMock, status: 200, statusText: 'OK', headers: {}, config: {} })
  //   );
  //   let data = {};

  //   service.getWeather().subscribe({
  //     next: (val) => { data = val },
  //     error: (err) => { throw err; },
  //     complete: () => {
  //       expect(data).toEqual(getWeatherMock)
  //       done();
  //     }
  //   });
  // });
  // it('should return error if request failed', (done) => {
  //   jest.spyOn(httpService, 'get').mockReturnValue(
  //     throwError(() => new Error('request failed'))
  //   );
  //   let data = {};

  //   service.getWeather().subscribe({
  //     next: (val) => { data = val },
  //     error: (err) => {
  //       expect(err).toBe('request failed');
  //       done();
  //     },
  //     complete: () => {
  //       expect(data).toBeUndefined();
  //       done();
  //     }
  //   });
  // });
});

const getWeatherMock = JSON.parse(`{"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":275.82,"feels_like":273.74,"temp_min":272.35,"temp_max":278.64,"pressure":1032,"humidity":80},"visibility":10000,"wind":{"speed":2.06,"deg":230},"clouds":{"all":10},"dt":1645841635,"sys":{"type":2,"id":2019646,"country":"GB","sunrise":1645858361,"sunset":1645896872},"timezone":0,"id":2643743,"name":"London","cod":200}`);


// import {
//   HttpClientTestingModule,
//   HttpTestingController,
// } from '@angular/common/http/testing';

// import { mockBookArray } from 'src/mocks/mockBooks';

// describe('BooksService', () => {
//   let service: BooksService;
//   let httpController: HttpTestingController;

//   let url = 'localhost:3000/';

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//     });
//     service = TestBed.inject(BooksService);
//     httpController = TestBed.inject(HttpTestingController);
//   });


//   it('should call getAllBooks and return an array of Books', () => {

//     // 1
//     service.getAllBooks().subscribe((res) => {
//       //2
//       expect(res).toEqual(mockBookArray);
//     });

//     //3
//     const req = httpController.expectOne({
//       method: 'GET',
//       url: `${url}/books`,
//     });

//     //4
//     req.flush(mockBookArray);
//   });
// }
