import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { CarElementModule } from '../car-element/car-element.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CarElementModule,
    FormsModule
  ],
  entryComponents: [FavoritesComponent],
  exports: [FavoritesComponent],
  declarations: [FavoritesComponent]
})
export class FavoritesModule { }
