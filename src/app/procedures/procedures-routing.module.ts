import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProceduresComponent} from './procedures.component';
import {ProcedureDetailsComponent} from './procedure-details/procedure-details.component';
import {ProcedureDetailsResolverService} from './procedure-details-resolver.service';
import {ProceduresCategoryComponent} from './procedures-category/procedures-category.component';
import {ProceduresCategoryResolverService} from './procedures-category/procedures-category-resolver.service';
import {ProceduresCategoryListComponent} from './procedures-category/procedures-category-list/procedures-category-list.component';



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
          { path: 'categories',
            component:  ProceduresCategoryListComponent,
            resolve: {
              category: ProceduresCategoryResolverService
            }
          },
          { path: 'category/:id',
            component:  ProceduresCategoryComponent,
            resolve: {
              category: ProceduresCategoryResolverService
            }
          },
          { path: 'procedure/:id',
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
