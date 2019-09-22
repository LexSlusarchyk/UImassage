import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home.component';
import {ProcedureDetailsComponent} from '../procedures/procedure-details/procedure-details.component';
import {ProcedureDetailsResolverService} from '../procedures/procedure-details-resolver.service';



const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuard],
    // children: [
    //   {
    //     path: '',
    //     // canActivateChild: [AuthGuard],
    //     children: [
    //       { path: 'procedure/:id',
    //         component:  ProcedureDetailsComponent,
    //         resolve: {
    //           procedure: ProcedureDetailsResolverService
    //         }
    //       },
    //     ]
    //   }
    // ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}
