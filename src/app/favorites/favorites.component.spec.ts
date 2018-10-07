import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { FavoritesComponent } from './favorites.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarElementModule } from '../car-element/car-element.module';
import { DialogService } from 'ng2-bootstrap-modal';
import { CarData } from '../model/car.model';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let service;
  let fixture: ComponentFixture<FavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesComponent ],
      imports: [FormsModule, CommonModule, CarElementModule],
      providers: [{provide: DialogService}]
    })
    .compileComponents();
    service = TestBed.get(DialogService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test ngOnInit()', () => {
    let newCar: CarData = new CarData({brand:'testBrand', model: 'testModel', price: 'testPrice', image:'audi-s3.png', isFavorite: false});
    component.favoriteList.push(newCar);
    component.ngOnInit();
    expect(component.auxFavoriteList).toEqual([newCar]);
  });

  it('should call updateList with no results', () => {
    let newCar: CarData = new CarData({brand:'testBrand', model: 'testModel', price: 'testPrice', image:'audi-s3.png', isFavorite: false});
    component.auxFavoriteList.push(newCar);
    component.searchValue = 'other';
    component.updateList();
    expect(component.favoriteList).toEqual([]);
  });

  it('should call updateList with results', () => {
    let newCar: CarData = new CarData({brand:'testBrand', model: 'testModel', price: 'testPrice', image:'audi-s3.png', isFavorite: false});
    component.auxFavoriteList.push(newCar);
    component.searchValue = 'testBrand';
    component.updateList();
    expect(component.favoriteList).toEqual([newCar]);
  });
});
