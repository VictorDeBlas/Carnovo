import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { CarElementComponent } from './car-element.component';
import { CommonModule } from '@angular/common';
import { CarData } from '../model/car.model';

describe('CarElementComponent', () => {
  let component: CarElementComponent;
  let fixture: ComponentFixture<CarElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarElementComponent ],
      imports: [ CommonModule ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarElementComponent);
    component = fixture.componentInstance;
    component.car = new CarData({brand:'testBrand', model: 'testModel', price: 'testPrice', image:'audi-s3.png', isFavorite: false});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
