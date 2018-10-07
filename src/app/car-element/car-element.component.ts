import { Component, OnInit, Input } from '@angular/core';
import { CarData } from '../model/car.model';

@Component({
  selector: 'app-car-element',
  templateUrl: './car-element.component.html',
  styleUrls: ['./car-element.component.scss']
})
export class CarElementComponent {

  @Input() public car: CarData;

  constructor() { }

}
