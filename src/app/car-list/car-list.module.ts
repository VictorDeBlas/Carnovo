import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './car-list.component';
import { SortPipe } from './car-list-sort.pipe';
import { SearchPipe } from './car-list-search.pipe';
import { CarElementModule } from '../car-element/car-element.module';

@NgModule({
  imports: [
    CommonModule,
    CarElementModule
  ],
  declarations: [CarListComponent, SortPipe, SearchPipe],
  exports: [CarListComponent]
})
export class CarListModule { }
