import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { CarData } from '../model/car.model';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  public getList(page: number): Observable<Array<CarData>> {
    return this.http.get('../../assets/cars.json')
            .map((res:any) => {
              let parsedResponse = res.json();
              let carListToConvert = parsedResponse.splice(page*5, 5);
              return this.convertDataToCars(carListToConvert);
            });
  }

  private convertDataToCars(carList: Array<any>): Array<CarData> {
    let cars: Array<CarData> = new Array<CarData>();
    carList.forEach ( carResponse => cars.push(new CarData(carResponse)));
    return cars;
  }

}
