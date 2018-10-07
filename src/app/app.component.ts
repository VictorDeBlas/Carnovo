import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ApiService } from './api/api.service';
import { CarData } from './model/car.model';
import { CarListComponent } from './car-list/car-list.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { FavoritesComponent } from './favorites/favorites.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService]
})
export class AppComponent implements OnInit{
  public searchBy: string = 'brand';
  public searchValue: string;
  public sortBy: string;
  public searchOptions: Array<string> = ['brand', 'model', 'price'];

  @ViewChild('carList') public carListComponent: CarListComponent;

  constructor(protected dialogService: DialogService) {
  }

  ngOnInit() {
    this.carListComponent.getListFirstPage();
  }

  public showFavoritesList(): void {
    let favoriteList: Array<any> = this.carListComponent.getFavoriteCars();
    this.dialogService.addDialog(FavoritesComponent, {
      favoriteList: favoriteList})
      .subscribe();
  }

  public loadMoreCars(): void {
    this.carListComponent.loadMoreCars();
  }

  public setOption(value: string): void {
    this.searchBy = value;
    this.updateSearchText();
  }

  public updateSearchText(): void {
    this.carListComponent.setSearchText(this.searchValue, this.searchBy);
  }

  public setSort(sortValue: string): void {
    this.sortBy = sortValue;
    this.carListComponent.setSortValue(this.sortBy);
  }
}
