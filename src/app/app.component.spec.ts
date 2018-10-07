import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CarElementModule } from './car-element/car-element.module';
import { CarListModule } from './car-list/car-list.module';
import { FavoritesModule } from './favorites/favorites.module';
import { HttpClientModule } from '@angular/common/http';
import { DialogService } from 'ng2-bootstrap-modal';
import { ApiService } from './api/api.service';
import { Observable } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let service;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpClientModule, HttpModule, FormsModule, CarElementModule, CarListModule, FavoritesModule],
      providers: [DialogService, {provide:ApiService}]
    }).compileComponents();
    service = TestBed.get(DialogService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should call ngOnInit()', () => {
    let getListFirstPageSpyOn = spyOn(component.carListComponent, 'getListFirstPage');
    component.ngOnInit();
    expect(getListFirstPageSpyOn).toHaveBeenCalled();
  });

  it('should call loadMoreCars', () => {
    let loadMoreCarsSpyOn = spyOn(component.carListComponent, 'loadMoreCars');
    component.loadMoreCars();
    expect(loadMoreCarsSpyOn).toHaveBeenCalled();
  });

  it('should call setOption', () => {
     let updateSpyOn = spyOn(component, 'updateSearchText');
     component.setOption('newOptionValue');
     expect(component.searchBy).toBe('newOptionValue');
     expect(updateSpyOn).toHaveBeenCalled();
  });

  it('should call updateSearchText', () => {
    let setSearchSpyOn = spyOn(component.carListComponent, 'setSearchText');
    component.searchValue = 'searchValue';
    component.searchBy = 'searchBy';
    component.updateSearchText();
    expect(setSearchSpyOn).toHaveBeenCalledWith('searchValue', 'searchBy');
  });

  it('should call setSort', () => {
    let setSortSpyOn = spyOn(component.carListComponent, 'setSortValue');
    component.setSort('newSortValue');
    expect(component.sortBy).toBe('newSortValue');
    expect(setSortSpyOn).toHaveBeenCalledWith('newSortValue');
  });

  it('should openFavoriteList', () => {
    let getFavoritesSpyOn = spyOn(component.carListComponent, 'getFavoriteCars');
    let addDialogSpyOn = spyOn(service, 'addDialog').and.returnValue(Observable.of(true))
    component.showFavoritesList();
    expect(getFavoritesSpyOn).toHaveBeenCalled();
    expect(addDialogSpyOn).toHaveBeenCalled();
  });

});
