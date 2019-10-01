import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material.module';


import {ProcedureDetailsComponent} from './procedure-details/procedure-details.component';
import {ProceduresRoutingModule} from './procedures-routing.module';
import {ProceduresComponent} from './procedures.component';
import {ProceduresCategoryComponent} from './procedures-category/procedures-category.component';
import { ProceduresCategoryListComponent } from './procedures-category/procedures-category-list/procedures-category-list.component';
import {CategoriesModule} from '../categories/categories.module';
import { ProceduresListComponent } from './procedures-list/procedures-list.component';



@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    ProceduresRoutingModule,
    CategoriesModule,
  ],
  declarations: [
    ProceduresComponent,
    ProceduresCategoryComponent,
    ProcedureDetailsComponent,
    ProceduresCategoryListComponent,
    ProceduresListComponent,
  ],
  exports: [
    ProceduresListComponent
  ]
})
export class ProceduresModule {}
