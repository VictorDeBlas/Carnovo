import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListComponent } from './car-list.component';
import { CommonModule } from '@angular/common';
import { CarElementModule } from '../car-element/car-element.module';
import { ApiService } from '../api/api.service';
import { SortPipe } from './car-list-sort.pipe';
import { SearchPipe } from './car-list-search.pipe';
import { CarData } from '../model/car.model';
import { Observable } from 'rxjs';

describe('CarListComponent', () => {
  let component: CarListComponent;
  let service;
  let fixture: ComponentFixture<CarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarListComponent, SortPipe, SearchPipe ],
      imports: [CommonModule, CarElementModule],
      providers: [{provide: ApiService}]
    })
    .compileComponents();
    service = TestBed.get(ApiService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call first page', () => {
    let loadCarsSpyOn = spyOn(component, 'loadCars');
    component.getListFirstPage();
    expect(loadCarsSpyOn).toHaveBeenCalledWith(0);
  });

  it('should call getFavoriteCars without results', () => {
    let newCar: CarData = new CarData({brand:'testBrand', model: 'testModel', price: 'testPrice', image:'audi-s3.png', isFavorite: false});
    component.carList.push(newCar);
    let favorites: Array<CarData> = component.getFavoriteCars();
    expect(favorites).toEqual([]);
  });

  it('should call getFavoriteCars with results', () => {
    let newCar: CarData = new CarData({brand:'testBrand', model: 'testModel', price: 'testPrice', image:'audi-s3.png', isFavorite: true});
    newCar.isFavorite = true;
    component.carList.push(newCar);
    let favorites: Array<CarData> = component.getFavoriteCars();
    expect(favorites).toEqual([newCar]);
  });

  it('should call loadMoreCars', () => {
    let loadCarsSpyOn = spyOn(component, 'loadCars');
    component.page = 0;
    component.loadMoreCars();
    expect(component.page).toBe(1);
    expect(loadCarsSpyOn).toHaveBeenCalledWith(1);
  });

  xit('should call loadCars', () => {
    // let getListSpyOn = spyOn(service, 'getList');
    // component.loadCars(0);
    // expect(getListSpyOn).toHaveBeenCalledWith(0)
    // expect(component.carList.length).toEqual(5);
  });

  it('should call setSearchText', () => {
    component.setSearchText('searchText', 'searchBy');
    expect(component.searchText).toEqual('searchText');
    expect(component.searchBy).toEqual('searchBy');
  });

  it('should call setSortValue', () => {
    component.setSortValue('sortValue');
    expect(component.sortBy).toEqual('sortValue');
  });

});
