import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {CategoriesManagementComponent} from './categories-management/categories-management.component';
import {ProceduresManagementComponent} from './procedures-management/procedures-management.component';
import {EditProcedureComponent} from './procedures-management/edit-procedure/edit-procedure.component';
import {NewsManagementComponent} from './news-management/news-management.component';
import {EditArticleComponent} from './news-management/edit-article/edit-article.component';



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
      },
      {
        path: '',
        // canActivateChild: [AuthGuard],
        children: [
          { path: 'news-management',
            component:  NewsManagementComponent
          }
        ]
      },
      {
        path: '',
        // canActivateChild: [AuthGuard],
        children: [
          { path: 'news-management/article/:id',
            component: EditArticleComponent
          }
        ]
      },
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
