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
import { EditProcedureComponent } from './procedures-management/edit-procedure/edit-procedure.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {FileUploaderModule} from './file-uploader/file-uploader.module';

@NgModule({
  imports: [
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,

    CommonModule,
    DashboardRoutingModule,
    CategoriesModule,
    ProceduresModule,
    FileUploaderModule,
  ],
  declarations: [
    DashboardComponent,
    CategoriesManagementComponent,
    ProceduresManagementComponent,
    SideNavComponent,
    EditProcedureComponent
  ]
})
export class DashboardModule {}
