import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material.module';
import {CategoriesTreeComponent} from './categories-tree/categories-tree.component';
import {CategoriesComponent} from './categories.component';
import {AppRoutingModule} from '../app-routing.module';
import {RouterModule} from '@angular/router';




@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
  ],
  declarations: [
    CategoriesComponent,
    CategoriesTreeComponent
  ],
  exports: [
    CategoriesComponent,
    CategoriesTreeComponent
  ]
})
export class CategoriesModule {}
