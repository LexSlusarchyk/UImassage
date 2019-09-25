import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material.module';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {CategoriesManagementComponent} from './categories-management/categories-management.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {CategoriesModule} from '../categories/categories.module';
import {ProceduresModule} from '../procedures/procedures.module';
import {ProceduresManagementComponent} from './procedures-management/procedures-management.component';




@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    DashboardRoutingModule,
    CategoriesModule,
    ProceduresModule,

  ],
  declarations: [
    DashboardComponent,
    CategoriesManagementComponent,
    ProceduresManagementComponent,
    SideNavComponent,
  ]
})
export class DashboardModule {}
