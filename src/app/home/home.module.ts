import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material.module';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';


@NgModule({
  imports: [
    MaterialModule,
    CommonModule,

    HomeRoutingModule,

  ],
  declarations: [
    HomeComponent,
  ]
})
export class HomeModule {}
