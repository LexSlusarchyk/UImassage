import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeesComponent} from './employees.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';




const employeesRoutes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    // canActivate: [AuthGuard],
    // children: [
    //   {
    //     path: '',
    //     // canActivateChild: [AuthGuard],
    //     children: [
    //       { path: 'employee/:id',
    //         component:  EmployeeDetailsComponent
    //       }
    //     ]
    //   }
    // ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(employeesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeesRoutingModule {}
