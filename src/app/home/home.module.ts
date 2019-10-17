import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material.module';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {CategoriesModule} from '../categories/categories.module';


@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    CategoriesModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
  ],
  exports: []
})
export class HomeModule {}
