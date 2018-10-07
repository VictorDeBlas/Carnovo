import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarElementModule } from './car-element/car-element.module';
import { CarListModule } from './car-list/car-list.module';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { FavoritesModule } from './favorites/favorites.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    CarElementModule,
    CarListModule,
    FavoritesModule,
    BootstrapModalModule.forRoot({container:document.body})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
