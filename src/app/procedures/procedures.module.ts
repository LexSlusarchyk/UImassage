import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material.module';


import {ProcedureDetailsComponent} from './procedure-details/procedure-details.component';
import {ProceduresRoutingModule} from './procedures-routing.module';
import {ProceduresComponent} from './procedures.component';
import {CategoriesTreeComponent} from '../categories/categories-tree/categories-tree.component';



@NgModule({
  imports: [
    MaterialModule,
    CommonModule,

    ProceduresRoutingModule,

  ],
  declarations: [
    ProceduresComponent,
    ProcedureDetailsComponent,
    CategoriesTreeComponent,
  ]
})
export class ProceduresModule {}
