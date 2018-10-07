import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { CarData } from '../model/car.model';

export interface FavoriteList {
  favoriteList: Array<any>;
}

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent extends DialogComponent<FavoriteList, boolean> implements FavoriteList, OnInit {

  public favoriteList: Array<CarData> = [];
  public searchValue: string;
  public auxFavoriteList: Array<CarData> = [];
  
  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  ngOnInit() {
    this.auxFavoriteList = this.favoriteList;
  }

  public updateList(): void {
    this.favoriteList = this.auxFavoriteList.filter( car => {
      return car.brand.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1;
    });
  }

}
