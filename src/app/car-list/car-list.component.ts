import { Component } from '@angular/core';
import { ApiService } from '../api/api.service';
import { CarData } from '../model/car.model';
import { SearchPipe } from './car-list-search.pipe';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {

  public carList: Array<CarData> = new Array<CarData>();
  public hasMoreAvailable: boolean = true;
  public searchText: string;
  public searchBy: string;
  public sortBy: string;
  public page = 0;

  constructor(protected apiService: ApiService) { }

  public getListFirstPage(): void {
    this.loadCars(0);
  }

  public getFavoriteCars(): Array<CarData> {
    return this.carList.filter(car => car.isFavorite === true );
  }

  public loadMoreCars(): void {
    this.page += 1; 
    this.loadCars(this.page);
  }

  public loadCars(page: number): void {
    this.apiService.getList(page)
      .subscribe(response => {
        this.carList.push(...response);
        this.checkMoreAvailable(page);
      });
  }

  public setSearchText(searchText: string, searchBy: string): void {
    this.searchText = searchText;
    this.searchBy = searchBy;
  }

  public setSortValue(sortValue: string): void {
    this.sortBy = sortValue;
  }

  private checkMoreAvailable(page: number): void {
    this.apiService.getList(page+1)
      .subscribe( response => this.hasMoreAvailable = response.length > 0);
  }

}
