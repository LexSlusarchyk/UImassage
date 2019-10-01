import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {CategoriesManagementComponent} from './categories-management/categories-management.component';
import {ProceduresManagementComponent} from './procedures-management/procedures-management.component';
import {EditProcedureComponent} from './procedures-management/edit-procedure/edit-procedure.component';



const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        // canActivateChild: [AuthGuard],
        children: [
          { path: 'categories-management',
            component:  CategoriesManagementComponent
          }
        ]
      },
      {
        path: '',
        // canActivateChild: [AuthGuard],
        children: [
          { path: 'procedures-management',
            component:  ProceduresManagementComponent
          }
        ]
      },
      {
        path: '',
        // canActivateChild: [AuthGuard],
        children: [
          { path: 'procedures-management/procedure/:id',
            component: EditProcedureComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {}
