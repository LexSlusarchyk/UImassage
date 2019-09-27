import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material.module';
import {CategoriesTreeComponent} from './categories-tree/categories-tree.component';
import {CategoriesComponent} from './categories.component';
import {AppRoutingModule} from '../app-routing.module';
import {RouterModule} from '@angular/router';
import { CategoryItemComponent } from './category-item/category-item.component';
import { CategoryListComponent } from './category-list/category-list.component';




@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
  ],
  declarations: [
    CategoriesComponent,
    CategoriesTreeComponent,
    CategoryItemComponent,
    CategoryListComponent
  ],
  exports: [
    CategoriesComponent,
    CategoriesTreeComponent,
    CategoryItemComponent,
    CategoryListComponent
  ]
})
export class CategoriesModule {}
