import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailComponent } from './detail/detail.component';
import { MapToArrayPipe, MapToArrayPurePipe } from './map-to-array.pipe';
import { EditComponent } from './edit/edit.component';
import { EquipageComponent } from './equipage/equipage.component';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomepageComponent,
    DetailComponent,
    MapToArrayPipe,
    MapToArrayPurePipe,
    EditComponent,
    EquipageComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
