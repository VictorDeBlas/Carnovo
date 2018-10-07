import { NgModule } from '@angular/core';
import { CarElementComponent } from './car-element.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CarElementComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      CarElementComponent
  ]
})
export class CarElementModule { }
