import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material.module';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {CategoriesModule} from '../categories/categories.module';
import {ContactsComponent} from './contacts/contacts.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    CategoriesModule,
    FontAwesomeModule,

    HomeRoutingModule,

  ],
  declarations: [
    HomeComponent,
    ContactsComponent
  ],
  exports: [
    ContactsComponent
  ]
})
export class HomeModule {}
