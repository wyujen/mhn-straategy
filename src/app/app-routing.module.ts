import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { EquipageComponent } from './equipage/equipage.component';
import { CarComponent } from './car/car.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'list', component: ListComponent },

  { path: 'detail/:page/:id', component: DetailComponent },
  { path: 'edit/:page/:id', component: EditComponent },
  { path: 'equipage', component: EquipageComponent },
  { path: 'car', component: CarComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
