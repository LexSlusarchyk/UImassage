import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material.module';


import {EmployeesRoutingModule} from './employees-routing.module';
import {EmployeesComponent} from './employees.component';
import {EmployeesListComponent} from './employees-list/employees-list.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';




@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    EmployeesRoutingModule,
  ],
  declarations: [
    EmployeesComponent,
    EmployeesListComponent,
    EmployeeDetailsComponent,
  ],
  exports: [
    EmployeesComponent,
    EmployeesListComponent,
    EmployeeDetailsComponent,
  ]
})
export class EmployeesModule {}
