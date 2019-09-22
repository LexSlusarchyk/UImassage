import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProceduresComponent} from './procedures.component';
import {ProcedureDetailsComponent} from './procedure-details/procedure-details.component';
import {ProcedureDetailsResolverService} from './procedure-details-resolver.service';



const proceduresRoutes: Routes = [
  {
    path: '',
    component: ProceduresComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        // canActivateChild: [AuthGuard],
        children: [
          { path: ':id',
            component:  ProcedureDetailsComponent,
            resolve: {
              procedure: ProcedureDetailsResolverService
            }
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(proceduresRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProceduresRoutingModule {}
