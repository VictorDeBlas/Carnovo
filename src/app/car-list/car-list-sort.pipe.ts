import { Pipe, PipeTransform } from '@angular/core';
import { CarData } from '../model/car.model';

@Pipe({ name: 'sort' })
export class SortPipe implements PipeTransform {
  transform(cars: Array<CarData>, orderBy: any): any {
    if(!orderBy) return cars;

    return cars.sort( (car1: CarData, car2: CarData) => {
        let value1 = car1[orderBy],
            value2 = car2[orderBy];
        if ( orderBy === 'price') {
            value1 = parseInt( value1, 10);
            value2 = parseInt( value2, 10);
        }
        if ( value1 < value2 ) {
            return -1;
        } else if ( value1 > value2 ) {
            return 1;
        } 
        return 0;
    });
  }
}