import { Pipe, PipeTransform } from '@angular/core';
import { CarData } from '../model/car.model';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
  transform(cars: Array<CarData>, searchParams: any): any {
    if(!searchParams[0]) return cars;

    return cars.filter(function(car){
      return car[searchParams[1]].toLowerCase().indexOf(searchParams[0].toLowerCase()) > -1;
    });
  }
}